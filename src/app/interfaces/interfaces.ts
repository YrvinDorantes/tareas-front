

export interface RespuestaTasks {
  ok: boolean;
  pagina: number;
  tasks: Task[];
}

export interface Task {
  _id?: string;
  titulo?: string;
  subtitulo?: string;
  prioridad?: string;
  categoria?: string;
  estatus?: string;
  dateTask?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Usuario {
  _id?: string;
  avatar?: string
  nombre?: string;
  email?: string;
  password?: string;
}