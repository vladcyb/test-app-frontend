export type Specialization = {
  id?: number
  title: string
};

export type Master = {
  id?: number
  login: string
  surname: string
  name: string
  patronymic: string
  Specialization: {
    id: number
    title: string
  }
};
