create database todolist;
create table tasks(
    id SERIAL PRIMARY KEY,
    "user_id" int,
    "content" text
);
create table users(
    id SERIAL PRIMARY KEY,
    "username" text NOT NULL,
    "password" text NOT NULL
);
alter table tasks
    add constraint fk_user
    foreign key (user_id)
    references users(id);

alter table users
    add constraint uq_user
    unique (username, password);

Insert into users(username,password) Values('admin','1234');
Insert into tasks(user_id,content) values(1,'realizar la compra de la semana');