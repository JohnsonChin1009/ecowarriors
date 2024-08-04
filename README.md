create_profile_for_user_trigger
create trigger create_profile_for_user_trigger after insert on auth.users for each row execute function create_profile_for_user_func();

drop_create_profile_for_user_trigger
drop trigger if exist create_profile_for_user_trigger on auth.users;

Schema for table
create table
  public.profiles (
    id uuid not null,
    username character varying null default ''::character varying,
    "userRole" character varying null default 'user'::character varying,
    "profilePicture" character varying null,
    last_modified_at timestamp with time zone null default now(),
    constraint profiles_pkey primary key (id),
    constraint profiles_id_key unique (id),
    constraint profiles_id_fkey foreign key (id) references auth.users (id) on delete cascade
  ) tablespace pg_default;