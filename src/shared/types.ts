export type SpecializationType = {
  id?: number
  title: string
};

export type MasterType = {
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

export type AddMasterType = {
  login: string
  surname: string
  name: string
  patronymic: string
  specId: number
};
