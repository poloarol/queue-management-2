INSERT INTO lab2019_Scheduler.FACULTY(IDENT) VALUES
  ('ARTS'),
  ('EDUCATION'), 
  ('ENGINEERING'),
  ('HEALTH SCIENCE'),
  ('LAW'),
  ('SCIENCE'),
  ('SOCIAL SCIENCES'),
  ('MEDECINE');


INSERT INTO lab2019_Scheduler.ROLES(IDENT) VALUES
    ('Full time Professor'),
    ('Part time Professor'),
    ("Teaching Assistant"),
    ('Practicuum Student'),
    ('Personnel'),
    ('Other');

INSERT INTO lab2019_Scheduler.SOFTWARE(IDENT) VALUES
    ('BrightSpace'),
    ('Maestro'),
    ('Lecture Capture'),
    ('Blue'),
    ('uOSyllabus'),
    ('Other');

INSERT INTO lab2019_Scheduler.TOPICS(SOFTWARE_ID, PROB) VALUES
    (1, 'Unable to login'),
    (1, 'Import content'),
    (1, 'Add files'),
    (1, 'Grade book'),
    (1, 'Groups'),
    (1, 'Discussions'),
    (1, 'Rubrics'),
    (1, 'Assignments'),
    (2, 'Unable to login');


INSERT INTO lab2019_Scheduler.SUB_TOPICS(TOPIC_ID, SUB_TOPIC) VALUES
    (4, 'Add/Delete Evaluation'),
    (4, 'Add/Modify grades'),
    (4, 'Import/Export grades'),
    (5, 'Setup groups | Crée des groupes'),
    (6, 'Create an Open discussion'),
    (6, 'Create a group discussion'),
    (6, 'Create single user discussion'),
    (8, 'Create an assignment'),
    (7, 'Create a rubric'),
    (7, 'Modify an existing rubric');


INSERT INTO lab2019_Scheduler.STAFF(IDENT) VALUES
    ('DM'), ('EC'), ('GL'), ('JP'), ('MB'),
    ('MP'), ('NV'), ('RR'), ('SL'), ('SV'), ('PW');


INSERT INTO lab2019_Scheduler.language(lang) VALUES
    ('ENGLISH'),
    ('FRENCH'),
    ('BOTH')