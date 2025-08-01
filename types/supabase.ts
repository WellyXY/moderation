export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "11.2.2 (f884da7)"
  }
  public: {
    Tables: {
      _yoyo_log: {
        Row: {
          comment: string | null
          created_at_utc: string | null
          hostname: string | null
          id: string
          migration_hash: string | null
          migration_id: string | null
          operation: string | null
          username: string | null
        }
        Insert: {
          comment?: string | null
          created_at_utc?: string | null
          hostname?: string | null
          id: string
          migration_hash?: string | null
          migration_id?: string | null
          operation?: string | null
          username?: string | null
        }
        Update: {
          comment?: string | null
          created_at_utc?: string | null
          hostname?: string | null
          id?: string
          migration_hash?: string | null
          migration_id?: string | null
          operation?: string | null
          username?: string | null
        }
        Relationships: []
      }
      _yoyo_migration: {
        Row: {
          applied_at_utc: string | null
          migration_hash: string
          migration_id: string | null
        }
        Insert: {
          applied_at_utc?: string | null
          migration_hash: string
          migration_id?: string | null
        }
        Update: {
          applied_at_utc?: string | null
          migration_hash?: string
          migration_id?: string | null
        }
        Relationships: []
      }
      _yoyo_version: {
        Row: {
          installed_at_utc: string | null
          version: number
        }
        Insert: {
          installed_at_utc?: string | null
          version: number
        }
        Update: {
          installed_at_utc?: string | null
          version?: number
        }
        Relationships: []
      }
      admin_users_logs: {
        Row: {
          action: string | null
          changed_by: string | null
          created_at: string
          id: number
          key: string | null
          new_value: Json | null
          old_value: Json | null
          user_id: string | null
        }
        Insert: {
          action?: string | null
          changed_by?: string | null
          created_at?: string
          id?: number
          key?: string | null
          new_value?: Json | null
          old_value?: Json | null
          user_id?: string | null
        }
        Update: {
          action?: string | null
          changed_by?: string | null
          created_at?: string
          id?: number
          key?: string | null
          new_value?: Json | null
          old_value?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admin_users_audit_log_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_users_audit_log_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_users_audit_log_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_users_audit_log_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_users_audit_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_users_audit_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_users_audit_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_users_audit_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      api_endpoints_usage: {
        Row: {
          count: number
          created_at: string
          endpoint: string
          hour_timestamp: string
          id: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          count?: number
          created_at?: string
          endpoint: string
          hour_timestamp: string
          id?: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          count?: number
          created_at?: string
          endpoint?: string
          hour_timestamp?: string
          id?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_api_endpoints_usage_organization"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      api_keys: {
        Row: {
          created_at: string
          generate_limit: number | null
          hashed_key: string
          id: string
          metadata: Json
          name: string
          org_id: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          generate_limit?: number | null
          hashed_key: string
          id?: string
          metadata?: Json
          name: string
          org_id: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          generate_limit?: number | null
          hashed_key?: string
          id?: string
          metadata?: Json
          name?: string
          org_id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      api_keys_usage: {
        Row: {
          count: number
          created_at: string
          hashed_api_key: string
          hour_timestamp: string
          id: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          count?: number
          created_at?: string
          hashed_api_key: string
          hour_timestamp: string
          id?: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          count?: number
          created_at?: string
          hashed_api_key?: string
          hour_timestamp?: string
          id?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_api_keys_usage_hashed_key"
            columns: ["hashed_api_key"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["hashed_key"]
          },
          {
            foreignKeyName: "fk_api_keys_usage_organization"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      api_orgs: {
        Row: {
          created_at: string
          id: string
          name: string | null
          stripe_customer_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          stripe_customer_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      api_users: {
        Row: {
          created_at: string
          id: string
          org_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          org_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          org_id?: string | null
        }
        Relationships: []
      }
      api_waitlist: {
        Row: {
          approved: boolean
          created_at: string
          email: string | null
          user_id: string
        }
        Insert: {
          approved: boolean
          created_at?: string
          email?: string | null
          user_id: string
        }
        Update: {
          approved?: boolean
          created_at?: string
          email?: string | null
          user_id?: string
        }
        Relationships: []
      }
      banned_phrases: {
        Row: {
          key_phrase: string
        }
        Insert: {
          key_phrase: string
        }
        Update: {
          key_phrase?: string
        }
        Relationships: []
      }
      bug_reports: {
        Row: {
          created_at: string
          description: string | null
          id: number
          is_resolved: boolean | null
          priority: number | null
          problem: string | null
          reporter_id: string | null
          screenshot_url: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          is_resolved?: boolean | null
          priority?: number | null
          problem?: string | null
          reporter_id?: string | null
          screenshot_url?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          is_resolved?: boolean | null
          priority?: number | null
          problem?: string | null
          reporter_id?: string | null
          screenshot_url?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      call_center: {
        Row: {
          created_at: string
          filename: string
          full_result: Json | null
          job_id: string
          job_spec: Json
          plan: string
          user_id: string
        }
        Insert: {
          created_at?: string
          filename: string
          full_result?: Json | null
          job_id?: string
          job_spec: Json
          plan: string
          user_id?: string
        }
        Update: {
          created_at?: string
          filename?: string
          full_result?: Json | null
          job_id?: string
          job_spec?: Json
          plan?: string
          user_id?: string
        }
        Relationships: []
      }
      cancel_subscription_survey: {
        Row: {
          created_at: string
          id: number
          reason: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          reason?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          reason?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      changelogs: {
        Row: {
          author: string
          created_at: string
          date: string
          description: Json[]
          id: number
          is_published: boolean
          title: string
        }
        Insert: {
          author: string
          created_at?: string
          date?: string
          description: Json[]
          id?: number
          is_published?: boolean
          title: string
        }
        Update: {
          author?: string
          created_at?: string
          date?: string
          description?: Json[]
          id?: number
          is_published?: boolean
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "changelogs_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "changelogs_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "changelogs_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "changelogs_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      changelogs_views: {
        Row: {
          changelog_id: number
          id: string
          user_id: string
          viewed_at: string
        }
        Insert: {
          changelog_id: number
          id?: string
          user_id: string
          viewed_at?: string
        }
        Update: {
          changelog_id?: number
          id?: string
          user_id?: string
          viewed_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "changelogs_views_changelog_id_fkey"
            columns: ["changelog_id"]
            isOneToOne: false
            referencedRelation: "changelogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "changelogs_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "changelogs_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "changelogs_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "changelogs_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      eleven_labs_usage: {
        Row: {
          characters_generated: number
          date: string
          id: number
          user_id: string
        }
        Insert: {
          characters_generated: number
          date: string
          id?: number
          user_id: string
        }
        Update: {
          characters_generated?: number
          date?: string
          id?: number
          user_id?: string
        }
        Relationships: []
      }
      hero_carousel: {
        Row: {
          action: string | null
          actionLink: string | null
          created_at: string
          description: string | null
          featured: Database["public"]["Enums"]["hero-carousel-featured"] | null
          id: string
          is_public: boolean | null
          mediaURL: string | null
          order: number | null
          subtitle: string | null
          tagline: string | null
          tags: string | null
          theme: Database["public"]["Enums"]["hero-carousel-theme"] | null
          title: string | null
        }
        Insert: {
          action?: string | null
          actionLink?: string | null
          created_at?: string
          description?: string | null
          featured?:
            | Database["public"]["Enums"]["hero-carousel-featured"]
            | null
          id?: string
          is_public?: boolean | null
          mediaURL?: string | null
          order?: number | null
          subtitle?: string | null
          tagline?: string | null
          tags?: string | null
          theme?: Database["public"]["Enums"]["hero-carousel-theme"] | null
          title?: string | null
        }
        Update: {
          action?: string | null
          actionLink?: string | null
          created_at?: string
          description?: string | null
          featured?:
            | Database["public"]["Enums"]["hero-carousel-featured"]
            | null
          id?: string
          is_public?: boolean | null
          mediaURL?: string | null
          order?: number | null
          subtitle?: string | null
          tagline?: string | null
          tags?: string | null
          theme?: Database["public"]["Enums"]["hero-carousel-theme"] | null
          title?: string | null
        }
        Relationships: []
      }
      mobile_files: {
        Row: {
          created_at: string
          filename: string | null
          id: string
          url: string | null
          used_in_generation: boolean
          user_id: string | null
        }
        Insert: {
          created_at?: string
          filename?: string | null
          id?: string
          url?: string | null
          used_in_generation?: boolean
          user_id?: string | null
        }
        Update: {
          created_at?: string
          filename?: string | null
          id?: string
          url?: string | null
          used_in_generation?: boolean
          user_id?: string | null
        }
        Relationships: []
      }
      new_model_first_generations: {
        Row: {
          finished: boolean | null
          user_id: string
          video_id: string
        }
        Insert: {
          finished?: boolean | null
          user_id?: string
          video_id?: string
        }
        Update: {
          finished?: boolean | null
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "first_one_five_generations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "first_one_five_generations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "first_one_five_generations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "first_one_five_generations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      nova_batch_jobs: {
        Row: {
          context: string | null
          createdAt: number
          lastRunStatus: string | null
          name: string
          running: boolean | null
          updatedAt: number
        }
        Insert: {
          context?: string | null
          createdAt?: number
          lastRunStatus?: string | null
          name: string
          running?: boolean | null
          updatedAt?: number
        }
        Update: {
          context?: string | null
          createdAt?: number
          lastRunStatus?: string | null
          name?: string
          running?: boolean | null
          updatedAt?: number
        }
        Relationships: []
      }
      nova_billing_memberships: {
        Row: {
          bonusCredits: number
          createdAt: number
          environment: string | null
          expiresAt: number | null
          freeCredits: number
          id: string
          membershipCredits: number
          monthlyCycleCount: number | null
          monthlyCycleEnd: number | null
          monthlyCycleStart: number | null
          productId: string | null
          purchasedCredits: number
          scheduledStatus: string | null
          store: string | null
          updatedAt: number | null
        }
        Insert: {
          bonusCredits?: number
          createdAt?: number
          environment?: string | null
          expiresAt?: number | null
          freeCredits?: number
          id: string
          membershipCredits?: number
          monthlyCycleCount?: number | null
          monthlyCycleEnd?: number | null
          monthlyCycleStart?: number | null
          productId?: string | null
          purchasedCredits?: number
          scheduledStatus?: string | null
          store?: string | null
          updatedAt?: number | null
        }
        Update: {
          bonusCredits?: number
          createdAt?: number
          environment?: string | null
          expiresAt?: number | null
          freeCredits?: number
          id?: string
          membershipCredits?: number
          monthlyCycleCount?: number | null
          monthlyCycleEnd?: number | null
          monthlyCycleStart?: number | null
          productId?: string | null
          purchasedCredits?: number
          scheduledStatus?: string | null
          store?: string | null
          updatedAt?: number | null
        }
        Relationships: []
      }
      nova_billing_transactions_processed: {
        Row: {
          eventId: string | null
          id: string
          processedAt: number
          productId: string
          userId: string
        }
        Insert: {
          eventId?: string | null
          id: string
          processedAt?: number
          productId: string
          userId: string
        }
        Update: {
          eventId?: string | null
          id?: string
          processedAt?: number
          productId?: string
          userId?: string
        }
        Relationships: []
      }
      nova_comment_likes: {
        Row: {
          commentId: string
          createdAt: number
          id: string
          userId: string
        }
        Insert: {
          commentId: string
          createdAt: number
          id?: string
          userId: string
        }
        Update: {
          commentId?: string
          createdAt?: number
          id?: string
          userId?: string
        }
        Relationships: []
      }
      nova_comment_replies: {
        Row: {
          baseId: string
          content: string | null
          createdAt: number
          deleted: boolean
          deletedAt: number | null
          id: string
          likeCount: number
          postId: string
          replyUserId: string | null
          updatedAt: number
          userId: string
        }
        Insert: {
          baseId: string
          content?: string | null
          createdAt: number
          deleted?: boolean
          deletedAt?: number | null
          id?: string
          likeCount?: number
          postId: string
          replyUserId?: string | null
          updatedAt: number
          userId: string
        }
        Update: {
          baseId?: string
          content?: string | null
          createdAt?: number
          deleted?: boolean
          deletedAt?: number | null
          id?: string
          likeCount?: number
          postId?: string
          replyUserId?: string | null
          updatedAt?: number
          userId?: string
        }
        Relationships: []
      }
      nova_comment_reply_likes: {
        Row: {
          commentId: string
          createdAt: number
          id: string
          userId: string
        }
        Insert: {
          commentId: string
          createdAt: number
          id?: string
          userId: string
        }
        Update: {
          commentId?: string
          createdAt?: number
          id?: string
          userId?: string
        }
        Relationships: []
      }
      nova_comments: {
        Row: {
          content: string | null
          createdAt: number
          deleted: boolean
          deletedAt: number | null
          id: string
          likeCount: number
          postId: string
          replyCount: number
          updatedAt: number
          userId: string
        }
        Insert: {
          content?: string | null
          createdAt: number
          deleted?: boolean
          deletedAt?: number | null
          id?: string
          likeCount?: number
          postId: string
          replyCount?: number
          updatedAt: number
          userId: string
        }
        Update: {
          content?: string | null
          createdAt?: number
          deleted?: boolean
          deletedAt?: number | null
          id?: string
          likeCount?: number
          postId?: string
          replyCount?: number
          updatedAt?: number
          userId?: string
        }
        Relationships: []
      }
      nova_events: {
        Row: {
          createdAt: number
          eventId: string
          id: string
          performUserId: string | null
          type: number
          userId: string
        }
        Insert: {
          createdAt: number
          eventId: string
          id?: string
          performUserId?: string | null
          type: number
          userId: string
        }
        Update: {
          createdAt?: number
          eventId?: string
          id?: string
          performUserId?: string | null
          type?: number
          userId?: string
        }
        Relationships: []
      }
      nova_files: {
        Row: {
          createdAt: number
          id: string
          type: string
          url: string
          userId: string
        }
        Insert: {
          createdAt?: number
          id?: string
          type: string
          url: string
          userId: string
        }
        Update: {
          createdAt?: number
          id?: string
          type?: string
          url?: string
          userId?: string
        }
        Relationships: []
      }
      nova_look_edit_categories: {
        Row: {
          id: number
          name: string
          sort_order: number
        }
        Insert: {
          id?: never
          name: string
          sort_order?: number
        }
        Update: {
          id?: never
          name?: string
          sort_order?: number
        }
        Relationships: []
      }
      nova_look_edit_history: {
        Row: {
          createdAt: number
          id: string
          jobs: string[]
          name: string | null
          postId: string | null
          slidingUsageCount: number | null
          updatedAt: number
          usageCount: number
          userId: string
        }
        Insert: {
          createdAt?: number
          id?: string
          jobs?: string[]
          name?: string | null
          postId?: string | null
          slidingUsageCount?: number | null
          updatedAt?: number
          usageCount?: number
          userId: string
        }
        Update: {
          createdAt?: number
          id?: string
          jobs?: string[]
          name?: string | null
          postId?: string | null
          slidingUsageCount?: number | null
          updatedAt?: number
          usageCount?: number
          userId?: string
        }
        Relationships: []
      }
      nova_look_edit_jobs: {
        Row: {
          createdAt: number
          id: string
          input: Json
          mode: string
          output: string | null
          presetId: number | null
          promptText: string | null
          status: string
          userId: string
        }
        Insert: {
          createdAt?: number
          id?: string
          input: Json
          mode: string
          output?: string | null
          presetId?: number | null
          promptText?: string | null
          status: string
          userId: string
        }
        Update: {
          createdAt?: number
          id?: string
          input?: Json
          mode?: string
          output?: string | null
          presetId?: number | null
          promptText?: string | null
          status?: string
          userId?: string
        }
        Relationships: []
      }
      nova_look_edit_presets: {
        Row: {
          category_id: number
          id: number
          isHidden: boolean
          model: string | null
          name: string
          prompt: string
          sort_order: number
          thumbnail: string
        }
        Insert: {
          category_id: number
          id?: number
          isHidden?: boolean
          model?: string | null
          name: string
          prompt: string
          sort_order?: number
          thumbnail: string
        }
        Update: {
          category_id?: number
          id?: number
          isHidden?: boolean
          model?: string | null
          name?: string
          prompt?: string
          sort_order?: number
          thumbnail?: string
        }
        Relationships: [
          {
            foreignKeyName: "nova_look_edit_presets_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "nova_look_edit_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      nova_post_likes: {
        Row: {
          createdAt: number
          id: string
          postId: string
          userId: string
        }
        Insert: {
          createdAt: number
          id?: string
          postId: string
          userId: string
        }
        Update: {
          createdAt?: number
          id?: string
          postId?: string
          userId?: string
        }
        Relationships: []
      }
      nova_post_watches: {
        Row: {
          createdAt: number
          id: string
          percentageMax: number
          postId: string
          userId: string
        }
        Insert: {
          createdAt?: number
          id?: string
          percentageMax?: number
          postId: string
          userId: string
        }
        Update: {
          createdAt?: number
          id?: string
          percentageMax?: number
          postId?: string
          userId?: string
        }
        Relationships: []
      }
      nova_posts: {
        Row: {
          audioId: string | null
          caption: string | null
          cmBoostCreatedAt: number | null
          cmBoosted: boolean
          cmBoostExpiresAt: number | null
          commentCount: number | null
          commentUserCount: number
          createdAt: number
          deleted: boolean | null
          deletedAt: number | null
          driving: boolean | null
          editLookId: string | null
          filter: string | null
          finishedWatchCount: number | null
          id: string
          image: Json | null
          jobId: string | null
          likeCount: number | null
          model: Json | null
          popularity: number | null
          remixCount: number | null
          remixId: string | null
          status: number | null
          totalWatchPercentage: number
          updatedAt: number
          userId: string
          video: Json | null
          watchCount: number
        }
        Insert: {
          audioId?: string | null
          caption?: string | null
          cmBoostCreatedAt?: number | null
          cmBoosted?: boolean
          cmBoostExpiresAt?: number | null
          commentCount?: number | null
          commentUserCount?: number
          createdAt?: number
          deleted?: boolean | null
          deletedAt?: number | null
          driving?: boolean | null
          editLookId?: string | null
          filter?: string | null
          finishedWatchCount?: number | null
          id?: string
          image?: Json | null
          jobId?: string | null
          likeCount?: number | null
          model?: Json | null
          popularity?: number | null
          remixCount?: number | null
          remixId?: string | null
          status?: number | null
          totalWatchPercentage?: number
          updatedAt?: number
          userId: string
          video?: Json | null
          watchCount?: number
        }
        Update: {
          audioId?: string | null
          caption?: string | null
          cmBoostCreatedAt?: number | null
          cmBoosted?: boolean
          cmBoostExpiresAt?: number | null
          commentCount?: number | null
          commentUserCount?: number
          createdAt?: number
          deleted?: boolean | null
          deletedAt?: number | null
          driving?: boolean | null
          editLookId?: string | null
          filter?: string | null
          finishedWatchCount?: number | null
          id?: string
          image?: Json | null
          jobId?: string | null
          likeCount?: number | null
          model?: Json | null
          popularity?: number | null
          remixCount?: number | null
          remixId?: string | null
          status?: number | null
          totalWatchPercentage?: number
          updatedAt?: number
          userId?: string
          video?: Json | null
          watchCount?: number
        }
        Relationships: []
      }
      nova_profiles: {
        Row: {
          avatar: string | null
          bio: string | null
          createdAt: number
          email: string | null
          feedWhitelist: boolean
          followerCount: number
          followingCount: number
          fullName: string | null
          generationCount: number | null
          id: string
          isBanned: boolean
          lastNotifReadAt: number
          postCount: number
          referralId: string | null
          search_text: string | null
          subscriberCount: number
          subscribingCount: number
          totalLikeCount: number | null
          updatedAt: number
          username: string
        }
        Insert: {
          avatar?: string | null
          bio?: string | null
          createdAt?: number
          email?: string | null
          feedWhitelist?: boolean
          followerCount?: number
          followingCount?: number
          fullName?: string | null
          generationCount?: number | null
          id: string
          isBanned?: boolean
          lastNotifReadAt?: number
          postCount?: number
          referralId?: string | null
          search_text?: string | null
          subscriberCount?: number
          subscribingCount?: number
          totalLikeCount?: number | null
          updatedAt?: number
          username: string
        }
        Update: {
          avatar?: string | null
          bio?: string | null
          createdAt?: number
          email?: string | null
          feedWhitelist?: boolean
          followerCount?: number
          followingCount?: number
          fullName?: string | null
          generationCount?: number | null
          id?: string
          isBanned?: boolean
          lastNotifReadAt?: number
          postCount?: number
          referralId?: string | null
          search_text?: string | null
          subscriberCount?: number
          subscribingCount?: number
          totalLikeCount?: number | null
          updatedAt?: number
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "nova_profiles_referralId_fkey"
            columns: ["referralId"]
            isOneToOne: false
            referencedRelation: "nova_referrals"
            referencedColumns: ["id"]
          },
        ]
      }
      nova_profiles_roles: {
        Row: {
          created_at: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          role: string
          user_id?: string
        }
        Update: {
          created_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "nova_profiles_roles_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "nova_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nova_profiles_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "nova_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      nova_recent_user_media: {
        Row: {
          audioId: string | null
          createdAt: number
          editLookId: string | null
          id: string
          isFromCamera: boolean
          mediaUrl: string | null
          type: string
          userId: string
        }
        Insert: {
          audioId?: string | null
          createdAt?: number
          editLookId?: string | null
          id?: string
          isFromCamera?: boolean
          mediaUrl?: string | null
          type?: string
          userId: string
        }
        Update: {
          audioId?: string | null
          createdAt?: number
          editLookId?: string | null
          id?: string
          isFromCamera?: boolean
          mediaUrl?: string | null
          type?: string
          userId?: string
        }
        Relationships: []
      }
      nova_recsys_params: {
        Row: {
          createdAt: number
          name: string
          updatedAt: number
          value: string | null
        }
        Insert: {
          createdAt?: number
          name: string
          updatedAt?: number
          value?: string | null
        }
        Update: {
          createdAt?: number
          name?: string
          updatedAt?: number
          value?: string | null
        }
        Relationships: []
      }
      nova_referrals: {
        Row: {
          createdAt: number
          id: string
          referralCode: string
          usageCnt: number
          usageLimit: number
          userId: string
        }
        Insert: {
          createdAt?: number
          id?: string
          referralCode: string
          usageCnt?: number
          usageLimit?: number
          userId: string
        }
        Update: {
          createdAt?: number
          id?: string
          referralCode?: string
          usageCnt?: number
          usageLimit?: number
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "nova_referrals_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "nova_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      nova_roles: {
        Row: {
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          created_at?: string
          id: string
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      nova_sounds: {
        Row: {
          artist: string | null
          coverUrl: string | null
          createdAt: number
          duration: number | null
          genre: string | null
          id: string
          models: Json | null
          name: string
          postId: string | null
          referenceId: string | null
          script: string | null
          search_text: string | null
          slidingUsageCount: number | null
          title: string | null
          trainingVideoUrl: string | null
          type: number
          updatedAt: number
          url: string
          usageCnt: number
          userId: string
        }
        Insert: {
          artist?: string | null
          coverUrl?: string | null
          createdAt: number
          duration?: number | null
          genre?: string | null
          id?: string
          models?: Json | null
          name: string
          postId?: string | null
          referenceId?: string | null
          script?: string | null
          search_text?: string | null
          slidingUsageCount?: number | null
          title?: string | null
          trainingVideoUrl?: string | null
          type?: number
          updatedAt?: number
          url: string
          usageCnt?: number
          userId: string
        }
        Update: {
          artist?: string | null
          coverUrl?: string | null
          createdAt?: number
          duration?: number | null
          genre?: string | null
          id?: string
          models?: Json | null
          name?: string
          postId?: string | null
          referenceId?: string | null
          script?: string | null
          search_text?: string | null
          slidingUsageCount?: number | null
          title?: string | null
          trainingVideoUrl?: string | null
          type?: number
          updatedAt?: number
          url?: string
          usageCnt?: number
          userId?: string
        }
        Relationships: []
      }
      nova_template_posts: {
        Row: {
          active: boolean | null
          createdAt: number | null
          id: number
          postId: string
          title: string | null
          updatedAt: number | null
        }
        Insert: {
          active?: boolean | null
          createdAt?: number | null
          id?: never
          postId: string
          title?: string | null
          updatedAt?: number | null
        }
        Update: {
          active?: boolean | null
          createdAt?: number | null
          id?: never
          postId?: string
          title?: string | null
          updatedAt?: number | null
        }
        Relationships: []
      }
      nova_trending_posts: {
        Row: {
          averageWatchPercentage: number | null
          averageWatchPercentageNormalized: number | null
          commentRateNormalized: number | null
          commentUserCount: number | null
          decayFactor: number | null
          finalScore: number | null
          finishedWatchCount: number | null
          finishedWatchRateNormalized: number | null
          hoursSince: number | null
          likeCount: number | null
          likeRateNormalized: number | null
          postId: string
          rank: number
          rankCreatedAt: number
          remixCount: number | null
          remixRateNormalized: number | null
          watchCount: number | null
        }
        Insert: {
          averageWatchPercentage?: number | null
          averageWatchPercentageNormalized?: number | null
          commentRateNormalized?: number | null
          commentUserCount?: number | null
          decayFactor?: number | null
          finalScore?: number | null
          finishedWatchCount?: number | null
          finishedWatchRateNormalized?: number | null
          hoursSince?: number | null
          likeCount?: number | null
          likeRateNormalized?: number | null
          postId: string
          rank: number
          rankCreatedAt: number
          remixCount?: number | null
          remixRateNormalized?: number | null
          watchCount?: number | null
        }
        Update: {
          averageWatchPercentage?: number | null
          averageWatchPercentageNormalized?: number | null
          commentRateNormalized?: number | null
          commentUserCount?: number | null
          decayFactor?: number | null
          finalScore?: number | null
          finishedWatchCount?: number | null
          finishedWatchRateNormalized?: number | null
          hoursSince?: number | null
          likeCount?: number | null
          likeRateNormalized?: number | null
          postId?: string
          rank?: number
          rankCreatedAt?: number
          remixCount?: number | null
          remixRateNormalized?: number | null
          watchCount?: number | null
        }
        Relationships: []
      }
      nova_trending_posts_staging: {
        Row: {
          averageWatchPercentage: number | null
          averageWatchPercentageNormalized: number | null
          commentRateNormalized: number | null
          commentUserCount: number | null
          decayFactor: number | null
          finalScore: number | null
          finishedWatchCount: number | null
          finishedWatchRateNormalized: number | null
          hoursSince: number | null
          likeCount: number | null
          likeRateNormalized: number | null
          postId: string
          rank: number
          rankCreatedAt: number
          remixCount: number | null
          remixRateNormalized: number | null
          watchCount: number | null
        }
        Insert: {
          averageWatchPercentage?: number | null
          averageWatchPercentageNormalized?: number | null
          commentRateNormalized?: number | null
          commentUserCount?: number | null
          decayFactor?: number | null
          finalScore?: number | null
          finishedWatchCount?: number | null
          finishedWatchRateNormalized?: number | null
          hoursSince?: number | null
          likeCount?: number | null
          likeRateNormalized?: number | null
          postId: string
          rank: number
          rankCreatedAt: number
          remixCount?: number | null
          remixRateNormalized?: number | null
          watchCount?: number | null
        }
        Update: {
          averageWatchPercentage?: number | null
          averageWatchPercentageNormalized?: number | null
          commentRateNormalized?: number | null
          commentUserCount?: number | null
          decayFactor?: number | null
          finalScore?: number | null
          finishedWatchCount?: number | null
          finishedWatchRateNormalized?: number | null
          hoursSince?: number | null
          likeCount?: number | null
          likeRateNormalized?: number | null
          postId?: string
          rank?: number
          rankCreatedAt?: number
          remixCount?: number | null
          remixRateNormalized?: number | null
          watchCount?: number | null
        }
        Relationships: []
      }
      nova_user_follow: {
        Row: {
          createdAt: number
          fromUserId: string
          id: string
          toUserId: string
        }
        Insert: {
          createdAt: number
          fromUserId: string
          id?: string
          toUserId: string
        }
        Update: {
          createdAt?: number
          fromUserId?: string
          id?: string
          toUserId?: string
        }
        Relationships: []
      }
      nova_user_subscribe: {
        Row: {
          createdAt: number
          fromUserId: string
          id: string
          toUserId: string
        }
        Insert: {
          createdAt: number
          fromUserId: string
          id?: string
          toUserId: string
        }
        Update: {
          createdAt?: number
          fromUserId?: string
          id?: string
          toUserId?: string
        }
        Relationships: []
      }
      nova_voices: {
        Row: {
          createdAt: number
          id: string
          name: string
          platform: string
          previewUrl: string
          thumbnail: string | null
          type: number
          userId: string
        }
        Insert: {
          createdAt: number
          id: string
          name: string
          platform?: string
          previewUrl: string
          thumbnail?: string | null
          type?: number
          userId: string
        }
        Update: {
          createdAt?: number
          id?: string
          name?: string
          platform?: string
          previewUrl?: string
          thumbnail?: string | null
          type?: number
          userId?: string
        }
        Relationships: []
      }
      one_five_pika_images: {
        Row: {
          created_at: string
          id: number
          image_url: string
        }
        Insert: {
          created_at?: string
          id?: number
          image_url: string
        }
        Update: {
          created_at?: string
          id?: number
          image_url?: string
        }
        Relationships: []
      }
      organization_members: {
        Row: {
          created_at: string
          is_notifications_enabled: boolean
          org_id: string
          role: number
          user_id: string
        }
        Insert: {
          created_at?: string
          is_notifications_enabled?: boolean
          org_id: string
          role: number
          user_id: string
        }
        Update: {
          created_at?: string
          is_notifications_enabled?: boolean
          org_id?: string
          role?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_users_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "organization_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      organization_subscriptions: {
        Row: {
          balance: number
          created_at: string
          id: string
          last_low_balance_notification: string | null
          stripe_customer_id: string | null
          tier: number | null
          total_spend: number
        }
        Insert: {
          balance?: number
          created_at?: string
          id: string
          last_low_balance_notification?: string | null
          stripe_customer_id?: string | null
          tier?: number | null
          total_spend?: number
        }
        Update: {
          balance?: number
          created_at?: string
          id?: string
          last_low_balance_notification?: string | null
          stripe_customer_id?: string | null
          tier?: number | null
          total_spend?: number
        }
        Relationships: [
          {
            foreignKeyName: "organization_subscriptions_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          created_by: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "organizations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "organizations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organizations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organizations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      preset_onboarding: {
        Row: {
          created_at: string
          id: number
          key_phrase: string | null
          option_type: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: number
          key_phrase?: string | null
          option_type: string
          value: string
        }
        Update: {
          created_at?: string
          id?: number
          key_phrase?: string | null
          option_type?: string
          value?: string
        }
        Relationships: []
      }
      preset_prompts: {
        Row: {
          created_at: string
          id: number
          prompt_text: string
        }
        Insert: {
          created_at?: string
          id?: number
          prompt_text: string
        }
        Update: {
          created_at?: string
          id?: number
          prompt_text?: string
        }
        Relationships: []
      }
      preset_styles: {
        Row: {
          created_at: string
          frame_rate: number | null
          id: number
          key_frontend_phrase: string
          key_phrase: string
          negative_prompt: string | null
          preview_image: string
          title: string
        }
        Insert: {
          created_at?: string
          frame_rate?: number | null
          id?: number
          key_frontend_phrase: string
          key_phrase: string
          negative_prompt?: string | null
          preview_image: string
          title: string
        }
        Update: {
          created_at?: string
          frame_rate?: number | null
          id?: number
          key_frontend_phrase?: string
          key_phrase?: string
          negative_prompt?: string | null
          preview_image?: string
          title?: string
        }
        Relationships: []
      }
      prev_ts: {
        Row: {
          rankCreatedAt: number | null
        }
        Insert: {
          rankCreatedAt?: number | null
        }
        Update: {
          rankCreatedAt?: number | null
        }
        Relationships: []
      }
      processed_credits_stripe_events: {
        Row: {
          processed_at: string | null
          stripe_event_id: string
        }
        Insert: {
          processed_at?: string | null
          stripe_event_id: string
        }
        Update: {
          processed_at?: string | null
          stripe_event_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar: string | null
          created_at: string | null
          deletion_date: string | null
          description: string | null
          email: string | null
          full_name: string | null
          id: string
          is_banned: boolean
          updated_at: string | null
          used_features: string[] | null
          username: string
        }
        Insert: {
          avatar?: string | null
          created_at?: string | null
          deletion_date?: string | null
          description?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          is_banned?: boolean
          updated_at?: string | null
          used_features?: string[] | null
          username: string
        }
        Update: {
          avatar?: string | null
          created_at?: string | null
          deletion_date?: string | null
          description?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          is_banned?: boolean
          updated_at?: string | null
          used_features?: string[] | null
          username?: string
        }
        Relationships: []
      }
      profiles_follow_relations: {
        Row: {
          created_at: string
          followed_id: string
          follower_id: string
        }
        Insert: {
          created_at?: string
          followed_id: string
          follower_id: string
        }
        Update: {
          created_at?: string
          followed_id?: string
          follower_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_follow_relations_followed_id_fkey"
            columns: ["followed_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "profiles_follow_relations_followed_id_fkey"
            columns: ["followed_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_follow_relations_followed_id_fkey"
            columns: ["followed_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_follow_relations_followed_id_fkey"
            columns: ["followed_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "profiles_follow_relations_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "profiles_follow_relations_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_follow_relations_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_follow_relations_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles_roles: {
        Row: {
          created_at: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_roles_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profiles_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_profiles_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profiles_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profiles_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: string
          title: string
        }
        Insert: {
          created_at?: string
          id: string
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      sessions: {
        Row: {
          created_at: string | null
          generations_count: number
          id: string
          slug: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          generations_count?: number
          id?: string
          slug: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          generations_count?: number
          id?: string
          slug?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      showcase_social_work: {
        Row: {
          created_at: string
          work_id: string
        }
        Insert: {
          created_at?: string
          work_id: string
        }
        Update: {
          created_at?: string
          work_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "showcase_social_work_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: true
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "showcase_social_work_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: true
            referencedRelation: "public_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "showcase_social_work_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: true
            referencedRelation: "social_work"
            referencedColumns: ["id"]
          },
        ]
      }
      slow_job_queue: {
        Row: {
          created_at: string
          i2v: boolean
          job_id: string
          job_spec: Json
          plan: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          i2v?: boolean
          job_id?: string
          job_spec: Json
          plan?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string
          i2v?: boolean
          job_id?: string
          job_spec?: Json
          plan?: string | null
          user_id?: string
        }
        Relationships: []
      }
      social_comments_reports: {
        Row: {
          comment_id: string
          reported_at: string
          reporter_id: string
        }
        Insert: {
          comment_id?: string
          reported_at?: string
          reporter_id?: string
        }
        Update: {
          comment_id?: string
          reported_at?: string
          reporter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_comments_reports_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "social_work_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_comments_reports_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_comments_reports_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_comments_reports_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_comments_reports_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      social_tags: {
        Row: {
          tag: string
        }
        Insert: {
          tag: string
        }
        Update: {
          tag?: string
        }
        Relationships: []
      }
      social_work: {
        Row: {
          created_at: string
          description: Json[] | null
          featured: boolean | null
          id: string
          is_public: boolean | null
          tags: string | null
          title: string | null
          tools: string | null
          updated_at: string | null
          user_id: string
          video_poster_url: string | null
          video_url: string | null
          views_count: number
        }
        Insert: {
          created_at?: string
          description?: Json[] | null
          featured?: boolean | null
          id?: string
          is_public?: boolean | null
          tags?: string | null
          title?: string | null
          tools?: string | null
          updated_at?: string | null
          user_id: string
          video_poster_url?: string | null
          video_url?: string | null
          views_count?: number
        }
        Update: {
          created_at?: string
          description?: Json[] | null
          featured?: boolean | null
          id?: string
          is_public?: boolean | null
          tags?: string | null
          title?: string | null
          tools?: string | null
          updated_at?: string | null
          user_id?: string
          video_poster_url?: string | null
          video_url?: string | null
          views_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "social_work_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_work_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      social_work_comment_likes: {
        Row: {
          comment_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_work_comment_likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "social_work_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comment_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_work_comment_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comment_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comment_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      social_work_comments: {
        Row: {
          created_at: string
          id: string
          parent_comment_id: string | null
          parent_work_id: string | null
          text: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          parent_work_id?: string | null
          text?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          parent_work_id?: string | null
          text?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_work_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "social_work_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comments_parent_work_id_fkey"
            columns: ["parent_work_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comments_parent_work_id_fkey"
            columns: ["parent_work_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comments_parent_work_id_fkey"
            columns: ["parent_work_id"]
            isOneToOne: false
            referencedRelation: "social_work"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_work_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      social_work_likes: {
        Row: {
          created_at: string
          user_id: string
          work_id: string
        }
        Insert: {
          created_at?: string
          user_id: string
          work_id: string
        }
        Update: {
          created_at?: string
          user_id?: string
          work_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_work_likes_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: false
            referencedRelation: "social_work"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          apple_product_id: string | null
          created_at: string
          discord_monthly_cycle_count: number | null
          discord_monthly_cycle_end_date: string | null
          discord_monthly_cycle_start_date: string | null
          discord_nr_credits: number | null
          discord_scheduled_subscription_status: string | null
          discord_stripe_customer_id: string | null
          discord_stripe_lookup_key: string | null
          discord_stripe_subscription_expiry_date: string | null
          discord_subscription_credits: number | null
          free_credits: number | null
          is_trial: boolean | null
          last_month_free_credits_reset: string | null
          monthly_cycle_count: number | null
          monthly_cycle_end_date: string | null
          monthly_cycle_start_date: string | null
          monthly_generations_count: number | null
          nr_credits: number
          remove_watermark: boolean | null
          scheduled_subscription_status: string | null
          stripe_customer_id: string | null
          stripe_lookup_key: string | null
          stripe_subscription_expiry_date: string | null
          subscription_credits: number
          trial_generations_count: number | null
          user_id: string
        }
        Insert: {
          apple_product_id?: string | null
          created_at?: string
          discord_monthly_cycle_count?: number | null
          discord_monthly_cycle_end_date?: string | null
          discord_monthly_cycle_start_date?: string | null
          discord_nr_credits?: number | null
          discord_scheduled_subscription_status?: string | null
          discord_stripe_customer_id?: string | null
          discord_stripe_lookup_key?: string | null
          discord_stripe_subscription_expiry_date?: string | null
          discord_subscription_credits?: number | null
          free_credits?: number | null
          is_trial?: boolean | null
          last_month_free_credits_reset?: string | null
          monthly_cycle_count?: number | null
          monthly_cycle_end_date?: string | null
          monthly_cycle_start_date?: string | null
          monthly_generations_count?: number | null
          nr_credits?: number
          remove_watermark?: boolean | null
          scheduled_subscription_status?: string | null
          stripe_customer_id?: string | null
          stripe_lookup_key?: string | null
          stripe_subscription_expiry_date?: string | null
          subscription_credits?: number
          trial_generations_count?: number | null
          user_id: string
        }
        Update: {
          apple_product_id?: string | null
          created_at?: string
          discord_monthly_cycle_count?: number | null
          discord_monthly_cycle_end_date?: string | null
          discord_monthly_cycle_start_date?: string | null
          discord_nr_credits?: number | null
          discord_scheduled_subscription_status?: string | null
          discord_stripe_customer_id?: string | null
          discord_stripe_lookup_key?: string | null
          discord_stripe_subscription_expiry_date?: string | null
          discord_subscription_credits?: number | null
          free_credits?: number | null
          is_trial?: boolean | null
          last_month_free_credits_reset?: string | null
          monthly_cycle_count?: number | null
          monthly_cycle_end_date?: string | null
          monthly_cycle_start_date?: string | null
          monthly_generations_count?: number | null
          nr_credits?: number
          remove_watermark?: boolean | null
          scheduled_subscription_status?: string | null
          stripe_customer_id?: string | null
          stripe_lookup_key?: string | null
          stripe_subscription_expiry_date?: string | null
          subscription_credits?: number
          trial_generations_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      survey_questions: {
        Row: {
          created_at: string
          id: number
          includeOther: boolean | null
          left_endpoint: Json | null
          options: Json[] | null
          order: number
          placeholder: string | null
          required: boolean
          right_endpoint: Json | null
          survey_id: number
          title: string
          type: number
        }
        Insert: {
          created_at?: string
          id?: number
          includeOther?: boolean | null
          left_endpoint?: Json | null
          options?: Json[] | null
          order: number
          placeholder?: string | null
          required?: boolean
          right_endpoint?: Json | null
          survey_id: number
          title: string
          type: number
        }
        Update: {
          created_at?: string
          id?: number
          includeOther?: boolean | null
          left_endpoint?: Json | null
          options?: Json[] | null
          order?: number
          placeholder?: string | null
          required?: boolean
          right_endpoint?: Json | null
          survey_id?: number
          title?: string
          type?: number
        }
        Relationships: [
          {
            foreignKeyName: "survey_questions_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_results: {
        Row: {
          content: Json[]
          created_at: string
          survey_id: number
          user_id: string
        }
        Insert: {
          content: Json[]
          created_at?: string
          survey_id: number
          user_id: string
        }
        Update: {
          content?: Json[]
          created_at?: string
          survey_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "survey_results_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_results_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "survey_results_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_results_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_results_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      survey_shows: {
        Row: {
          created_at: string
          last_ignored: string | null
          show_count: number
          survey_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          last_ignored?: string | null
          show_count?: number
          survey_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          last_ignored?: string | null
          show_count?: number
          survey_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "survey_shows_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_shows_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "survey_shows_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_shows_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_shows_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      survey_triggers: {
        Row: {
          created_at: string
          id: number
          name: string
          type: number
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          type: number
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          type?: number
        }
        Relationships: []
      }
      surveys: {
        Row: {
          created_at: string
          cta_text: string | null
          description: string | null
          id: number
          max_show_times: number
          name: string
          priority: boolean
          status: number
          trigger_id: number | null
        }
        Insert: {
          created_at?: string
          cta_text?: string | null
          description?: string | null
          id?: number
          max_show_times: number
          name: string
          priority?: boolean
          status?: number
          trigger_id?: number | null
        }
        Update: {
          created_at?: string
          cta_text?: string | null
          description?: string | null
          id?: number
          max_show_times?: number
          name?: string
          priority?: boolean
          status?: number
          trigger_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "surveys_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "survey_triggers"
            referencedColumns: ["id"]
          },
        ]
      }
      test: {
        Row: {
          created_at: string
          id: number
          id2: number
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id2: number
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id2?: number
          user_id?: number | null
        }
        Relationships: []
      }
      tos_accepted: {
        Row: {
          user_id: string
        }
        Insert: {
          user_id: string
        }
        Update: {
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tos_accepted_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tos_accepted_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tos_accepted_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tos_accepted_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_admin_comments: {
        Row: {
          author_id: string
          comment: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          author_id: string
          comment: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          author_id?: string
          comment?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_admin_comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_admin_comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_admin_comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_admin_comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_admin_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_admin_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_admin_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_admin_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      violations: {
        Row: {
          created_at: string
          hive_response: Json | null
          id: number
          job_id: string | null
          job_info: Json | null
          review_status: string | null
          type: string | null
          upload_urls: string[] | null
          user_id: string | null
          violation: string | null
        }
        Insert: {
          created_at?: string
          hive_response?: Json | null
          id?: number
          job_id?: string | null
          job_info?: Json | null
          review_status?: string | null
          type?: string | null
          upload_urls?: string[] | null
          user_id?: string | null
          violation?: string | null
        }
        Update: {
          created_at?: string
          hive_response?: Json | null
          id?: number
          job_id?: string | null
          job_info?: Json | null
          review_status?: string | null
          type?: string | null
          upload_urls?: string[] | null
          user_id?: string | null
          violation?: string | null
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          approved: boolean
          approved_at: string | null
          created_at: string
          email: string | null
          user_id: string
        }
        Insert: {
          approved: boolean
          approved_at?: string | null
          created_at?: string
          email?: string | null
          user_id: string
        }
        Update: {
          approved?: boolean
          approved_at?: string | null
          created_at?: string
          email?: string | null
          user_id?: string
        }
        Relationships: []
      }
      yoyo_lock: {
        Row: {
          ctime: string | null
          locked: number
          pid: number
        }
        Insert: {
          ctime?: string | null
          locked?: number
          pid: number
        }
        Update: {
          ctime?: string | null
          locked?: number
          pid?: number
        }
        Relationships: []
      }
    }
    Views: {
      admin_social_work_view: {
        Row: {
          avatar: string | null
          created_at: string | null
          description: Json[] | null
          full_name: string | null
          id: string | null
          showcase: boolean | null
          showcased_at: string | null
          tags: string | null
          title: string | null
          tools: string | null
          user_id: string | null
          username: string | null
          video_poster_url: string | null
          video_url: string | null
          views_count: number | null
        }
        Relationships: []
      }
      nova_trending_posts_view: {
        Row: {
          audioId: string | null
          caption: string | null
          commentCount: number | null
          createdAt: number | null
          deleted: boolean | null
          deletedAt: number | null
          driving: boolean | null
          editLookId: string | null
          filter: string | null
          id: string | null
          image: Json | null
          likeCount: number | null
          model: Json | null
          popularity: number | null
          rank: number | null
          remixCount: number | null
          status: number | null
          userId: string | null
          video: Json | null
        }
        Relationships: []
      }
      public_profiles_view: {
        Row: {
          avatar: string | null
          description: string | null
          followers_count: number | null
          following_count: number | null
          full_name: string | null
          id: string | null
          username: string | null
        }
        Insert: {
          avatar?: string | null
          description?: string | null
          followers_count?: never
          following_count?: never
          full_name?: string | null
          id?: string | null
          username?: string | null
        }
        Update: {
          avatar?: string | null
          description?: string | null
          followers_count?: never
          following_count?: never
          full_name?: string | null
          id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      public_social_work_view: {
        Row: {
          avatar: string | null
          created_at: string | null
          description: Json[] | null
          featured: boolean | null
          full_name: string | null
          id: string | null
          tags: string | null
          title: string | null
          tools: string | null
          user_id: string | null
          username: string | null
          video_poster_url: string | null
          video_url: string | null
          views_count: number | null
        }
        Relationships: []
      }
      signup_stats: {
        Row: {
          all_users: number | null
          discord_signups: number | null
          email_signups: number | null
          gmail_signups: number | null
        }
        Relationships: []
      }
      social_work_likes_view: {
        Row: {
          avatar: string | null
          created_at: string | null
          description: string | null
          email: string | null
          full_name: string | null
          user_id: string | null
          username: string | null
          work_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "social_work_likes_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: false
            referencedRelation: "admin_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: false
            referencedRelation: "public_social_work_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_work_likes_work_id_fkey"
            columns: ["work_id"]
            isOneToOne: false
            referencedRelation: "social_work"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      add_compression_policy: {
        Args: {
          hypertable: unknown
          compress_after: unknown
          if_not_exists?: boolean
          schedule_interval?: unknown
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      add_continuous_aggregate_policy: {
        Args: {
          continuous_aggregate: unknown
          start_offset: unknown
          end_offset: unknown
          schedule_interval: unknown
          if_not_exists?: boolean
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      add_credits: {
        Args: {
          user_id: string
          free_credits_input: number
          nr_credits_input: number
          subscription_credits_input: number
          discord_nr_credits_input: number
          discord_subscription_credits_input: number
        }
        Returns: undefined
      }
      add_data_node: {
        Args: {
          node_name: unknown
          host: string
          database?: unknown
          port?: number
          if_not_exists?: boolean
          bootstrap?: boolean
          password?: string
        }
        Returns: {
          node_name: unknown
          host: string
          port: number
          database: unknown
          node_created: boolean
          database_created: boolean
          extension_created: boolean
        }[]
      }
      add_dimension: {
        Args: {
          hypertable: unknown
          column_name: unknown
          number_partitions?: number
          chunk_time_interval?: unknown
          partitioning_func?: unknown
          if_not_exists?: boolean
        }
        Returns: {
          dimension_id: number
          schema_name: unknown
          table_name: unknown
          column_name: unknown
          created: boolean
        }[]
      }
      add_discord_nr_credits: {
        Args: {
          customer_id: string
          credits_to_add: number
          stripe_event_id_input: string
        }
        Returns: undefined
      }
      add_job: {
        Args: {
          proc: unknown
          schedule_interval: unknown
          config?: Json
          initial_start?: string
          scheduled?: boolean
          check_config?: unknown
          fixed_schedule?: boolean
          timezone?: string
        }
        Returns: number
      }
      add_nr_credits: {
        Args: {
          customer_id: string
          credits_to_add: number
          stripe_event_id_input: string
        }
        Returns: undefined
      }
      add_organization_balance2: {
        Args: { p_org_id: string; p_amount: number }
        Returns: boolean
      }
      add_organization_balance3: {
        Args: { p_org_id: number; p_amount: number }
        Returns: boolean
      }
      add_reorder_policy: {
        Args: {
          hypertable: unknown
          index_name: unknown
          if_not_exists?: boolean
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      add_retention_policy: {
        Args: {
          relation: unknown
          drop_after: unknown
          if_not_exists?: boolean
          schedule_interval?: unknown
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      alter_data_node: {
        Args: {
          node_name: unknown
          host?: string
          database?: unknown
          port?: number
          available?: boolean
        }
        Returns: {
          node_name: unknown
          host: string
          port: number
          database: unknown
          available: boolean
        }[]
      }
      alter_job: {
        Args: {
          job_id: number
          schedule_interval?: unknown
          max_runtime?: unknown
          max_retries?: number
          retry_period?: unknown
          scheduled?: boolean
          config?: Json
          next_start?: string
          if_exists?: boolean
          check_config?: unknown
        }
        Returns: {
          job_id: number
          schedule_interval: unknown
          max_runtime: unknown
          max_retries: number
          retry_period: unknown
          scheduled: boolean
          config: Json
          next_start: string
          check_config: string
        }[]
      }
      approximate_row_count: {
        Args: { relation: unknown }
        Returns: number
      }
      attach_data_node: {
        Args: {
          node_name: unknown
          hypertable: unknown
          if_not_attached?: boolean
          repartition?: boolean
        }
        Returns: {
          hypertable_id: number
          node_hypertable_id: number
          node_name: unknown
        }[]
      }
      attach_tablespace: {
        Args: {
          tablespace: unknown
          hypertable: unknown
          if_not_attached?: boolean
        }
        Returns: undefined
      }
      calculate_trending_posts: {
        Args: {
          days_limit?: number
          posts_limit?: number
          half_life_hours?: number
          p_like?: number
          like_weight?: number
          p_comment?: number
          comment_weight?: number
          p_remix?: number
          remix_weight?: number
          p_finished_watch?: number
          finished_watch_weight?: number
          e_watch_percetage?: number
          average_watch_weight?: number
          result_limit?: number
        }
        Returns: boolean
      }
      check_api_key: {
        Args: { p_hashed_api_key: string; p_generate?: boolean }
        Returns: {
          org_id: string
          generate_limit: number
          metadata: Json
          status: string
        }[]
      }
      chunk_compression_stats: {
        Args: { hypertable: unknown }
        Returns: {
          chunk_schema: unknown
          chunk_name: unknown
          compression_status: string
          before_compression_table_bytes: number
          before_compression_index_bytes: number
          before_compression_toast_bytes: number
          before_compression_total_bytes: number
          after_compression_table_bytes: number
          after_compression_index_bytes: number
          after_compression_toast_bytes: number
          after_compression_total_bytes: number
          node_name: unknown
        }[]
      }
      chunks_detailed_size: {
        Args: { hypertable: unknown }
        Returns: {
          chunk_schema: unknown
          chunk_name: unknown
          table_bytes: number
          index_bytes: number
          toast_bytes: number
          total_bytes: number
          node_name: unknown
        }[]
      }
      compress_chunk: {
        Args: { uncompressed_chunk: unknown; if_not_compressed?: boolean }
        Returns: unknown
      }
      create_api_key: {
        Args:
          | { p_org_id: string; p_hashed_key: string; p_name?: string }
          | {
              p_org_id: string
              p_hashed_key: string
              p_user_id: string
              p_name?: string
            }
        Returns: {
          id: string
          name: string
          created_at: string
          status: string
        }[]
      }
      create_distributed_hypertable: {
        Args: {
          relation: unknown
          time_column_name: unknown
          partitioning_column?: unknown
          number_partitions?: number
          associated_schema_name?: unknown
          associated_table_prefix?: unknown
          chunk_time_interval?: unknown
          create_default_indexes?: boolean
          if_not_exists?: boolean
          partitioning_func?: unknown
          migrate_data?: boolean
          chunk_target_size?: string
          chunk_sizing_func?: unknown
          time_partitioning_func?: unknown
          replication_factor?: number
          data_nodes?: unknown[]
        }
        Returns: {
          hypertable_id: number
          schema_name: unknown
          table_name: unknown
          created: boolean
        }[]
      }
      create_distributed_restore_point: {
        Args: { name: string }
        Returns: {
          node_name: unknown
          node_type: string
          restore_point: unknown
        }[]
      }
      create_hypertable: {
        Args: {
          relation: unknown
          time_column_name: unknown
          partitioning_column?: unknown
          number_partitions?: number
          associated_schema_name?: unknown
          associated_table_prefix?: unknown
          chunk_time_interval?: unknown
          create_default_indexes?: boolean
          if_not_exists?: boolean
          partitioning_func?: unknown
          migrate_data?: boolean
          chunk_target_size?: string
          chunk_sizing_func?: unknown
          time_partitioning_func?: unknown
          replication_factor?: number
          data_nodes?: unknown[]
          distributed?: boolean
        }
        Returns: {
          hypertable_id: number
          schema_name: unknown
          table_name: unknown
          created: boolean
        }[]
      }
      create_user_default_org: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
        }[]
      }
      create_user_default_org_new: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
        }[]
      }
      decompress_chunk: {
        Args: { uncompressed_chunk: unknown; if_compressed?: boolean }
        Returns: unknown
      }
      decrement_follow_counts: {
        Args: { from_user_id: string; to_user_id: string }
        Returns: undefined
      }
      decrement_generations: {
        Args: { p_user_id: string; p_slug: string }
        Returns: undefined
      }
      deduct_credits: {
        Args: { input_user_id: string; credits_to_deduct: number }
        Returns: {
          deducted_subscription_credits: number
          deducted_free_credits: number
          deducted_nr_credits: number
        }[]
      }
      deduct_discord_credits: {
        Args: { input_user_id: string; credits_to_deduct: number }
        Returns: {
          deducted_discord_subscription_credits: number
          deducted_free_credits: number
          deducted_discord_nr_credits: number
        }[]
      }
      deduct_nova_billing_credits: {
        Args: { p_user_id: string; p_amount_to_deduct: number }
        Returns: {
          membershipCreditsDeducted: number
          purchasedCreditsDeducted: number
          bonusCreditsDeducted: number
          freeCreditsDeducted: number
        }[]
      }
      deduct_organization_balance: {
        Args: { customer_id: string; amount: number }
        Returns: boolean
      }
      deduct_organization_balance2: {
        Args: { p_org_id: string; p_amount: number }
        Returns: boolean
      }
      deduct_organization_balance3: {
        Args: { p_org_id: number; p_amount: number }
        Returns: boolean
      }
      deduct_sandbox_credits: {
        Args: { input_user_id: string; credits_to_deduct: number }
        Returns: {
          deducted_subscription_credits: number
          deducted_discord_subscription_credits: number
          deducted_free_credits: number
          deducted_nr_credits: number
        }[]
      }
      delete_api_key: {
        Args: { p_key_id: string } | { p_key_id: string; p_user_id: string }
        Returns: {
          id: string
          name: string
          status: string
        }[]
      }
      delete_data_node: {
        Args: {
          node_name: unknown
          if_exists?: boolean
          force?: boolean
          repartition?: boolean
          drop_database?: boolean
        }
        Returns: boolean
      }
      delete_job: {
        Args: { job_id: number }
        Returns: undefined
      }
      delete_users: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      detach_data_node: {
        Args: {
          node_name: unknown
          hypertable?: unknown
          if_attached?: boolean
          force?: boolean
          repartition?: boolean
          drop_remote_data?: boolean
        }
        Returns: number
      }
      detach_tablespace: {
        Args: {
          tablespace: unknown
          hypertable?: unknown
          if_attached?: boolean
        }
        Returns: number
      }
      detach_tablespaces: {
        Args: { hypertable: unknown }
        Returns: number
      }
      discord_update_yearly_subscriptions: {
        Args: { credits: number; lookup_key: string }
        Returns: number
      }
      drop_chunks: {
        Args: {
          relation: unknown
          older_than?: unknown
          newer_than?: unknown
          verbose?: boolean
        }
        Returns: string[]
      }
      finish_run_batch_job: {
        Args: { job_name: string; job_context: string; last_run_status: string }
        Returns: boolean
      }
      generate_slug: {
        Args: { title: string }
        Returns: string
      }
      get_changelogs_admin: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          title: string
          description: Json[]
          date: string
          created_at: string
          is_published: boolean
          author: string
          author_name: string
        }[]
      }
      get_changelogs_with_viewed_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          title: string
          description: Json[]
          date: string
          created_at: string
          is_published: boolean
          author: string
          viewed: boolean
        }[]
      }
      get_featured_profile_work: {
        Args: { usr_id: string }
        Returns: {
          id: string
          title: string
          video_url: string
          video_poster_url: string
          views_count: number
          featured: boolean
          likes_count: number
          is_liked: boolean
          username: string
          full_name: string
          avatar: string
          user_id: string
          is_followed_by_current_user: boolean
        }[]
      }
      get_liked_work: {
        Args: { usr_id: string; page_num: number; page_size: number }
        Returns: {
          id: string
          title: string
          video_url: string
          video_poster_url: string
          views_count: number
          featured: boolean
          likes_count: number
          is_liked: boolean
          username: string
          full_name: string
          avatar: string
          user_id: string
          is_followed_by_current_user: boolean
        }[]
      }
      get_nova_curate_feed: {
        Args: { p_user_id: string; p_limit: number; p_cursor?: number }
        Returns: {
          audioId: string | null
          caption: string | null
          cmBoostCreatedAt: number | null
          cmBoosted: boolean
          cmBoostExpiresAt: number | null
          commentCount: number | null
          commentUserCount: number
          createdAt: number
          deleted: boolean | null
          deletedAt: number | null
          driving: boolean | null
          editLookId: string | null
          filter: string | null
          finishedWatchCount: number | null
          id: string
          image: Json | null
          jobId: string | null
          likeCount: number | null
          model: Json | null
          popularity: number | null
          remixCount: number | null
          remixId: string | null
          status: number | null
          totalWatchPercentage: number
          updatedAt: number
          userId: string
          video: Json | null
          watchCount: number
        }[]
      }
      get_nova_trending_feed: {
        Args: { p_user_id: string; p_limit: number; p_cursor?: number }
        Returns: {
          audioId: string | null
          caption: string | null
          commentCount: number | null
          createdAt: number | null
          deleted: boolean | null
          deletedAt: number | null
          driving: boolean | null
          editLookId: string | null
          filter: string | null
          id: string | null
          image: Json | null
          likeCount: number | null
          model: Json | null
          popularity: number | null
          rank: number | null
          remixCount: number | null
          status: number | null
          userId: string | null
          video: Json | null
        }[]
      }
      get_organization_api_usage: {
        Args: {
          p_org_id: string
          p_start_time: string
          p_end_time: string
          p_interval?: string
          p_api_key?: string
          p_endpoint?: string
        }
        Returns: {
          time_bucket: string
          api_key: string
          endpoint: string
          request_count: number
        }[]
      }
      get_profile_work: {
        Args: { usr_id: string; page_num: number; page_size: number }
        Returns: {
          id: string
          title: string
          video_url: string
          video_poster_url: string
          views_count: number
          featured: boolean
          likes_count: number
          is_liked: boolean
          username: string
          full_name: string
          avatar: string
          user_id: string
          is_followed_by_current_user: boolean
        }[]
      }
      get_public_profiles: {
        Args: { page_num: number; page_size: number; search_query?: string }
        Returns: {
          avatar: string | null
          description: string | null
          followers_count: number | null
          following_count: number | null
          full_name: string | null
          id: string | null
          username: string | null
        }[]
      }
      get_random_pika_image: {
        Args: Record<PropertyKey, never>
        Returns: {
          image_url: string
        }[]
      }
      get_signup_stats: {
        Args: Record<PropertyKey, never>
        Returns: {
          discord_signups: number
          gmail_signups: number
          email_signups: number
          all_users: number
        }[]
      }
      get_social_work: {
        Args: {
          page_num: number
          page_size: number
          filter_following_work: boolean
        }
        Returns: {
          id: string
          title: string
          video_url: string
          video_poster_url: string
          views_count: number
          featured: boolean
          likes_count: number
          is_liked: boolean
          username: string
          full_name: string
          avatar: string
          user_id: string
          is_followed_by_current_user: boolean
        }[]
      }
      get_social_work_comments: {
        Args: { work_id: string; page_num: number; page_size: number }
        Returns: {
          id: string
          text: string
          created_at: string
          is_liked: boolean
          user_id: string
          avatar: string
          full_name: string
          username: string
        }[]
      }
      get_social_work_details: {
        Args: { work_id: string }
        Returns: {
          id: string
          title: string
          video_url: string
          video_poster_url: string
          views_count: number
          description: Json[]
          tags: string
          tools: string
          likes_count: number
          is_liked: boolean
          user_id: string
          username: string
          full_name: string
          avatar: string
          is_following: boolean
          comments_count: number
          created_at: string
        }[]
      }
      get_social_work_likes_profiles: {
        Args: {
          social_work_id: string
          page_num: number
          page_size: number
          search_query?: string
        }
        Returns: {
          avatar: string | null
          created_at: string | null
          description: string | null
          email: string | null
          full_name: string | null
          user_id: string | null
          username: string | null
          work_id: string | null
        }[]
      }
      get_survey_by_id: {
        Args: { survey: number }
        Returns: {
          id: number
          name: string
          description: string
          status: number
          cta_text: string
          trigger_id: number
          trigger_name: string
          max_show_times: number
          priority: boolean
          created_at: string
          response_count: number
        }[]
      }
      get_survey_for_triggers: {
        Args: { trigger_ids: number[] }
        Returns: {
          survey_id: number
          name: string
          description: string
          cta_text: string
        }[]
      }
      get_survey_summary: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_surveys: number
          active_surveys: number
          total_responses: number
        }[]
      }
      get_survey_triggers_options: {
        Args: Record<PropertyKey, never>
        Returns: {
          label: string
          value: number
        }[]
      }
      get_surveys_admin: {
        Args: {
          search_query: string
          page_num: number
          page_size: number
          filter_by_trigger_id?: number
        }
        Returns: {
          id: number
          name: string
          description: string
          status: number
          cta_text: string
          trigger_id: number
          trigger_name: string
          max_show_times: number
          priority: boolean
          created_at: string
          response_count: number
        }[]
      }
      get_telemetry_report: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_user_by_id: {
        Args: { user_id: string }
        Returns: {
          avatar: string | null
          created_at: string | null
          deletion_date: string | null
          description: string | null
          email: string | null
          full_name: string | null
          id: string
          is_banned: boolean
          updated_at: string | null
          used_features: string[] | null
          username: string
        }[]
      }
      get_user_followers: {
        Args: {
          user_id: string
          current_user_id: string
          page_num: number
          page_size: number
          search_query?: string
        }
        Returns: {
          id: string
          full_name: string
          avatar: string
          username: string
          description: string
          followers: number
          following: number
          is_followed_by_current_user: boolean
        }[]
      }
      get_user_following: {
        Args: {
          user_id: string
          current_user_id: string
          page_num: number
          page_size: number
          search_query?: string
        }
        Returns: {
          id: string
          full_name: string
          avatar: string
          username: string
          description: string
          followers: number
          following: number
          is_followed_by_current_user: boolean
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      hypertable_compression_stats: {
        Args: { hypertable: unknown }
        Returns: {
          total_chunks: number
          number_compressed_chunks: number
          before_compression_table_bytes: number
          before_compression_index_bytes: number
          before_compression_toast_bytes: number
          before_compression_total_bytes: number
          after_compression_table_bytes: number
          after_compression_index_bytes: number
          after_compression_toast_bytes: number
          after_compression_total_bytes: number
          node_name: unknown
        }[]
      }
      hypertable_detailed_size: {
        Args: { hypertable: unknown }
        Returns: {
          table_bytes: number
          index_bytes: number
          toast_bytes: number
          total_bytes: number
          node_name: unknown
        }[]
      }
      hypertable_index_size: {
        Args: { index_name: unknown }
        Returns: number
      }
      hypertable_size: {
        Args: { hypertable: unknown }
        Returns: number
      }
      increment_comment_like_count: {
        Args: { comment_id: string; increment_by: number }
        Returns: {
          like: Database["public"]["Tables"]["nova_comments"]["Row"]
        }[]
      }
      increment_comment_reply_count: {
        Args: { comment_id: string; increment_by: number }
        Returns: {
          like: Database["public"]["Tables"]["nova_comments"]["Row"]
        }[]
      }
      increment_comment_reply_like_count: {
        Args: { comment_id: string; increment_by: number }
        Returns: {
          like: Database["public"]["Tables"]["nova_comment_replies"]["Row"]
        }[]
      }
      increment_edit_look_usage_count: {
        Args: { p_id: string; p_diff: number }
        Returns: undefined
      }
      increment_follow_counts: {
        Args: { from_user_id: string; to_user_id: string }
        Returns: undefined
      }
      increment_generation_count: {
        Args: { user_id: string; inc_amt?: number }
        Returns: undefined
      }
      increment_generations: {
        Args: { p_user_id: string; p_slug: string }
        Returns: undefined
      }
      increment_post_comment_count: {
        Args: { post_id: string; increment_by: number }
        Returns: {
          like: Database["public"]["Tables"]["nova_posts"]["Row"]
        }[]
      }
      increment_post_like_count: {
        Args: { post_id: string; increment_by: number }
        Returns: {
          like: Database["public"]["Tables"]["nova_posts"]["Row"]
        }[]
      }
      increment_post_remix_count: {
        Args: { post_id: string; increment_by: number }
        Returns: {
          like: Database["public"]["Tables"]["nova_posts"]["Row"]
        }[]
      }
      increment_social_work_views_count: {
        Args: { work_id: string }
        Returns: undefined
      }
      increment_sound_usage_count: {
        Args: { sound_id: string; increment_by: number }
        Returns: {
          like: Database["public"]["Tables"]["nova_sounds"]["Row"]
        }[]
      }
      increment_user_post_count: {
        Args: { user_id: string; increment_by: number }
        Returns: undefined
      }
      insert_nova_file: {
        Args: {
          p_user_id: string
          p_type: string
          p_filename: string
          p_url_prefix: string
        }
        Returns: {
          createdAt: number
          id: string
          type: string
          url: string
          userId: string
        }
      }
      insert_nova_voice: {
        Args: {
          p_id: string
          p_user_id: string
          p_name: string
          p_preview_url: string
          p_created_at: number
          p_max_count: number
          p_type: number
          p_platform: string
        }
        Returns: undefined
      }
      interpolate: {
        Args:
          | {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
          | {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
          | {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
          | {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
          | {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
        Returns: number
      }
      is_org_admin_or_owner: {
        Args: { org_id: string; user_id: string }
        Returns: boolean
      }
      is_org_member: {
        Args: { org_id: string; user_id: string }
        Returns: boolean
      }
      is_org_owner: {
        Args: { org_id: string; user_id: string }
        Returns: boolean
      }
      locf: {
        Args: {
          value: unknown
          prev?: unknown
          treat_null_as_missing?: boolean
        }
        Returns: unknown
      }
      move_chunk: {
        Args: {
          chunk: unknown
          destination_tablespace: unknown
          index_destination_tablespace?: unknown
          reorder_index?: unknown
          verbose?: boolean
        }
        Returns: undefined
      }
      process_nova_billing_credits_transaction: {
        Args: {
          p_transaction_id: string
          p_user_id: string
          p_product_id: string
          p_credits_to_add: number
          p_credit_column?: string
          p_event_id?: string
        }
        Returns: {
          bonusCredits: number
          createdAt: number
          environment: string | null
          expiresAt: number | null
          freeCredits: number
          id: string
          membershipCredits: number
          monthlyCycleCount: number | null
          monthlyCycleEnd: number | null
          monthlyCycleStart: number | null
          productId: string | null
          purchasedCredits: number
          scheduledStatus: string | null
          store: string | null
          updatedAt: number | null
        }
      }
      read_api_keys: {
        Args: { p_org_id: string } | { p_org_id: string; p_user_id: string }
        Returns: {
          id: string
          name: string
          created_at: string
          status: string
        }[]
      }
      record_speech_generated: {
        Args: { uid: string; characters_count: number }
        Returns: undefined
      }
      refresh_trending_posts: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      remove_compression_policy: {
        Args: { hypertable: unknown; if_exists?: boolean }
        Returns: boolean
      }
      remove_continuous_aggregate_policy: {
        Args: {
          continuous_aggregate: unknown
          if_not_exists?: boolean
          if_exists?: boolean
        }
        Returns: undefined
      }
      remove_reorder_policy: {
        Args: { hypertable: unknown; if_exists?: boolean }
        Returns: undefined
      }
      remove_retention_policy: {
        Args: { relation: unknown; if_exists?: boolean }
        Returns: undefined
      }
      reorder_chunk: {
        Args: { chunk: unknown; index?: unknown; verbose?: boolean }
        Returns: undefined
      }
      request_to_run_batch_job: {
        Args: {
          job_name: string
          cooldown_seconds: number
          timeout_seconds: number
        }
        Returns: {
          context: string | null
          createdAt: number
          lastRunStatus: string | null
          name: string
          running: boolean | null
          updatedAt: number
        }
      }
      reset_free_credits: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      reset_look_edit_history_sliding_usage_count: {
        Args: { batch_size?: number }
        Returns: number
      }
      reset_monthly_free_credits: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      reset_sounds_sliding_usage_count: {
        Args: { batch_size?: number }
        Returns: number
      }
      search_social_work: {
        Args: { page_num: number; page_size: number; search_query?: string }
        Returns: {
          id: string
          title: string
          video_url: string
          video_poster_url: string
          views_count: number
          likes_count: number
          is_liked: boolean
          username: string
          full_name: string
          avatar: string
          user_id: string
          is_followed_by_current_user: boolean
        }[]
      }
      set_adaptive_chunking: {
        Args: { hypertable: unknown; chunk_target_size: string }
        Returns: Record<string, unknown>
      }
      set_chunk_time_interval: {
        Args: {
          hypertable: unknown
          chunk_time_interval: unknown
          dimension_name?: unknown
        }
        Returns: undefined
      }
      set_integer_now_func: {
        Args: {
          hypertable: unknown
          integer_now_func: unknown
          replace_if_exists?: boolean
        }
        Returns: undefined
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      set_number_partitions: {
        Args: {
          hypertable: unknown
          number_partitions: number
          dimension_name?: unknown
        }
        Returns: undefined
      }
      set_replication_factor: {
        Args: { hypertable: unknown; replication_factor: number }
        Returns: undefined
      }
      show_chunks: {
        Args: { relation: unknown; older_than?: unknown; newer_than?: unknown }
        Returns: unknown[]
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_tablespaces: {
        Args: { hypertable: unknown }
        Returns: unknown[]
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      test_uuid_generate: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      time_bucket: {
        Args:
          | { bucket_width: number; ts: number }
          | { bucket_width: number; ts: number }
          | { bucket_width: number; ts: number }
          | { bucket_width: number; ts: number; offset: number }
          | { bucket_width: number; ts: number; offset: number }
          | { bucket_width: number; ts: number; offset: number }
          | { bucket_width: unknown; ts: string }
          | { bucket_width: unknown; ts: string }
          | { bucket_width: unknown; ts: string }
          | { bucket_width: unknown; ts: string; offset: unknown }
          | { bucket_width: unknown; ts: string; offset: unknown }
          | { bucket_width: unknown; ts: string; offset: unknown }
          | { bucket_width: unknown; ts: string; origin: string }
          | { bucket_width: unknown; ts: string; origin: string }
          | { bucket_width: unknown; ts: string; origin: string }
          | {
              bucket_width: unknown
              ts: string
              timezone: string
              origin?: string
              offset?: unknown
            }
        Returns: string
      }
      time_bucket_gapfill: {
        Args:
          | {
              bucket_width: number
              ts: number
              start?: number
              finish?: number
            }
          | {
              bucket_width: number
              ts: number
              start?: number
              finish?: number
            }
          | {
              bucket_width: number
              ts: number
              start?: number
              finish?: number
            }
          | {
              bucket_width: unknown
              ts: string
              start?: string
              finish?: string
            }
          | {
              bucket_width: unknown
              ts: string
              start?: string
              finish?: string
            }
          | {
              bucket_width: unknown
              ts: string
              start?: string
              finish?: string
            }
          | {
              bucket_width: unknown
              ts: string
              timezone: string
              start?: string
              finish?: string
            }
        Returns: number
      }
      timescaledb_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      timescaledb_post_restore: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      timescaledb_pre_restore: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      toggle_watermark: {
        Args: { value: boolean }
        Returns: undefined
      }
      track_api_generation: {
        Args: { api_key_hash: string; api_endpoint: string }
        Returns: undefined
      }
      update_comment_user_count: {
        Args: { post_id: string }
        Returns: undefined
      }
      update_organization_balance: {
        Args: { customer_id: string; amount: number }
        Returns: undefined
      }
      update_yearly_subscriptions: {
        Args: { credits: number; lookup_key: string }
        Returns: number
      }
      upsert_post_watch: {
        Args: { post_id: string; user_id: string; percentage: number }
        Returns: undefined
      }
      upsert_recent_user_media: {
        Args: {
          p_user_id: string
          p_media_url: string
          p_audio_id: string
          p_type: string
          p_edit_look_id: string
          p_is_from_camera?: boolean
        }
        Returns: undefined
      }
      verify_user_password: {
        Args: { password: string }
        Returns: boolean
      }
    }
    Enums: {
      "hero-carousel-featured": "pika-pick" | "audience-choice"
      "hero-carousel-theme": "light" | "dark"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      "hero-carousel-featured": ["pika-pick", "audience-choice"],
      "hero-carousel-theme": ["light", "dark"],
    },
  },
} as const
