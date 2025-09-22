export class Task<ID> {

  constructor(
    protected id: ID,
    protected tarea: string,
    protected cumplida: boolean
  ) {}



  // Getter y Setter para id
  public getId(): ID {
    return this.id;
  }

  public setId(id: ID): void {
    this.id = id;
  }

  // Getter y Setter para tarea
  public getTarea(): string {
    return this.tarea;
  }

  public setTarea(tarea: string): void {
    this.tarea = tarea;
  }

  // Getter y Setter para cumplida
  public isCumplida(): boolean {
    return this.cumplida;
  }

  public setCumplida(cumplida: boolean): void {
    this.cumplida = cumplida;
  }



}
