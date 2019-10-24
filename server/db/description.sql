CREATE TABLE LAB2019_SCHEDULER.FACULTY (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDENT VARCHAR(30) NOT NULL
);

CREATE TABLE LAB2019_SCHEDULER.ROLES (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDENT VARCHAR(50) NOT NULL
);

CREATE TABLE LAB2019_SCHEDULER.STAFF (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDENT CHAR(2) NOT NULL
);

CREATE TABLE LAB2019_SCHEDULER.SOFTWARE(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDENT VARCHAR(50) NOT NULL
);

CREATE TABLE LAB2019_SCHEDULER.TOPICS(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    SOFTWARE_ID INT REFERENCES SOFTWARE(ID),
    PROB TEXT NOT NULL
);

CREATE TABLE LAB2019_SCHEDULER.SUB_TOPICS(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TOPIC_ID INT REFERENCES TOPICS(ID),
    SUB_TOPIC TEXT NOT NULL
);

CREATE TABLE LAB2019_SCHEDULER.LANGUAGE(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    LANG VARCHAR(20) NOT NULL
)

-- CREATE TYPE LANG AS ENUM('ENGLISH | ANGLAIS', 'FRENCH | FRANÇAIS', 'BOTH | LES DEUX');
-- CREATE TYPE STATION AS ENUM('1', '2', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16');

create table lab2019_Scheduler.job (
	id int auto_increment primary key,
    fname varchar(20) not null,
    lname varchar(20) not null,
    today timestamp not null,
    faculty_id int references lab2019_scheduler.faculty(id),
    roles_id int references lab2019_scheduler.roles(id),
    lang int references lab2019_Scheduler.LANGUAGE(id),
    assisted_by INT REFERENCES STAFF(id),
    assisted BOOLEAN NOT NULL DEFAULT FALSE,
    station_id ENUM('1', '2', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'),
    software text not null,
    topics text not null,
    contact boolean not null default false
)