export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      company: {
        Row: {
          id: string
          name: string
          description: string
          image: string
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description: string
          image: string
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string
          image?: string
          created_at?: string | null
        }
      }
      tags: {
        Row: {
          id: number
          icon: string | null
          name: string
          description: string | null
        }
        Insert: {
          id?: number
          icon?: string | null
          name: string
          description?: string | null
        }
        Update: {
          id?: number
          icon?: string | null
          name?: string
          description?: string | null
        }
      }
      submitted: {
        Row: {
          id: string
          name: string
          description: string
          website: string
          created_at: string | null
          image: string
          company_id: string
          tags: number[] | null
        }
        Insert: {
          id?: string
          name: string
          description: string
          website: string
          created_at?: string | null
          image: string
          company_id: string
          tags?: number[] | null
        }
        Update: {
          id?: string
          name?: string
          description?: string
          website?: string
          created_at?: string | null
          image?: string
          company_id?: string
          tags?: number[] | null
        }
      }
      collection: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          profile_id: string | null
          resource_collection_id: string | null
        }
        Insert: {
          id: string
          created_at?: string | null
          name?: string | null
          profile_id?: string | null
          resource_collection_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          profile_id?: string | null
          resource_collection_id?: string | null
        }
      }
      resources_collection: {
        Row: {
          id: string
          collection_id: string | null
          resource_id: string | null
        }
        Insert: {
          id: string
          collection_id?: string | null
          resource_id?: string | null
        }
        Update: {
          id?: string
          collection_id?: string | null
          resource_id?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string | null
          username: string | null
          email: string | null
          avatar_id: number | null
        }
        Insert: {
          id: string
          created_at?: string | null
          username?: string | null
          email?: string | null
          avatar_id?: number | null
        }
        Update: {
          id?: string
          created_at?: string | null
          username?: string | null
          email?: string | null
          avatar_id?: number | null
        }
      }
      avatars: {
        Row: {
          id: number
          code: string | null
        }
        Insert: {
          id?: number
          code?: string | null
        }
        Update: {
          id?: number
          code?: string | null
        }
      }
      resources: {
        Row: {
          id: string
          name: string
          description: string
          website: string
          created_at: string | null
          image: string
          company_id: string
          tags: number[] | null
        }
        Insert: {
          id?: string
          name: string
          description: string
          website: string
          created_at?: string | null
          image: string
          company_id: string
          tags?: number[] | null
        }
        Update: {
          id?: string
          name?: string
          description?: string
          website?: string
          created_at?: string | null
          image?: string
          company_id?: string
          tags?: number[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
