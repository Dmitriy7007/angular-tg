import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IProjectImage {
  id: string;
  url: string;
  alt: string | null;
  sortOrder: number;
}

export interface IProject {
  id: string;
  title: string;
  description: string | null;
  group: 'FullStack' | 'React' | 'Vue' | 'Angular' | 'Mobile';
  href: string | null;
  git: string | null;
  boosty: string | null;
  previewImage: string;
  images: IProjectImage[];
  videoUrl: string | null;
  stack: string[];
  isFeatured: boolean;
  sortOrder: number;
}

const API_URL = 'https://portfolio-nextjs-vert-delta.vercel.app/api/projects';

const GROUP_LABELS: Record<string, string> = {
  FullStack: 'Full-Stack',
  React: 'React',
  Vue: 'Vue',
  Angular: 'Angular',
  Mobile: 'Mobile',
};

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private http = inject(HttpClient);

  readonly projects = signal<IProject[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  readonly byGroup = computed(() => {
    return this.projects().reduce((acc, project) => {
      if (!acc[project.group]) {
        acc[project.group] = [];
      }
      acc[project.group].push(project);
      return acc;
    }, {} as Record<string, IProject[]>);
  });

  readonly groups = computed(() => {
    return Object.keys(this.byGroup());
  });

  constructor() {
    this.loadProjects();
  }

  private loadProjects() {
    this.loading.set(true);
    this.http.get<IProject[]>(API_URL).subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load projects:', err);
        this.error.set('Не удалось загрузить проекты');
        this.loading.set(false);
      },
    });
  }

  getById(id: string): IProject | undefined {
    return this.projects().find((p) => p.id === id);
  }

  getGroupLabel(group: string): string {
    return GROUP_LABELS[group] || group;
  }
}
