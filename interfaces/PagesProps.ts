import React from "react"
import { AxiosError } from "axios"
import { Action } from "../hooks/useMutation"
import { IChangeElement } from "../hooks/useForm"

export interface FormFieldsProps<T> {
  formState: T
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void
}

export interface ListItemProps<T> {
  record: T
  // add more
  update: Action<T>
}
export interface columnsTableProps {
  label: string
  sortKey?: string
}

export interface RecordIndexProps<T> {
  apiPath: string
  apiOptions: {}
  ListItem: React.FC<ListItemProps<T>>
  FormFields: React.FC<FormFieldsProps<T>>
  emptyRecord: T
  // add more
  columns: columnsTableProps[]
  textSearch: string
  setTextSearch: Function
  setVisibleFilter: Function
  setPopularFilter?: Function
  setStoryFilter?: Function
  setCategoryFilter?: Function
  setSort?: Function
  setOrder?: Function
  order?: string
  sort?: string
}
export interface RecordListProps<T> {
  ListItem: React.FC<ListItemProps<T>>
  records: T[]
  emptyRecord: T
  activeRecord: T
  setActiveRecord: Function
  loading: boolean
  error?: AxiosError
  apiPath: string
  callback: Function
  // add mored
  columns: columnsTableProps[]
  textSearch: string
  setTextSearch: Function
  setVisibleFilter: Function
  setPopularFilter: Function | undefined
  setStoryFilter: Function | undefined
  setCategoryFilter: Function | undefined
  setSort: Function | undefined
  setOrder: Function | undefined
  order: string | undefined
  sort: string | undefined
}
export interface TableProps<T> {
  ListItem: React.FC<ListItemProps<T>>
  records: T[]
  setActiveRecord: Function
  // add more
  update: Action<T>
  remove: Action<T>
  columns: columnsTableProps[]
  textSearch: string
  setTextSearch: Function
  setVisibleFilter: Function
  setPopularFilter: Function | undefined
  setStoryFilter: Function | undefined
  setCategoryFilter: Function | undefined
  setSort: Function | undefined
  setOrder: Function | undefined
  order: string | undefined
  sort: string | undefined
}
export interface RecordMutationsProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>
  activeRecord: T
  apiPath: string
  callback: Function
}

export interface RecordNewProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>
  activeRecord: T
  create: Action<T>
  remove: Action<T>
  success?: boolean
}

export interface RecordEditProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>
  activeRecord: T
  update: Action<T>
  success?: boolean
}

export interface RecordFormProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>
  activeRecord: T
  submitAction: Action<T>
  success?: boolean
}

export interface InputProps {
  label: string
  name: string
  type?: string
  value?: string
  checked?: boolean
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void
}

export interface SelectProps<T> {
  label: string
  name: string
  value: number | string | undefined
  options: T[]
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void
}

export interface MutilCheckboxProps<T> {
  label: string
  name: string
  value: string[]
  options: T[]
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void
}
