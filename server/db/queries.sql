INSERT INTO FACULTY(IDENT) VALUES
  ('ARTS | ART'),
  ('EDUCATION | ÉDUCATION'), 
  ('ENGINEERING | GÉNIE'),
  ('HEALTH SCIENCE | SCIENCE DE LA SANTÉ'),
  ('LAW | DROIT'),
  ('SCIENCE'),
  ('SOCIAL SCIENCES | SCIENCES SOCIALE'),
  ('MEDECINE | MÉDÉCINE');


INSERT INTO ROLES(IDENT) VALUES
    ('Full time Professor | Professeur Régulier'),
    ('Part time Professor | Professeur en temps partiel'),
    ("Teaching Assistant | Assistant d'enseignement"),
    ('Practicuum Student | Étudiant (Practicuum)'),
    ('Personnel'),
    ('Other | Autre');

INSERT INTO SOFTWARE(IDENT) VALUES
    ('BrightSpace'),
    ('Maestro'),
    ('Lecture Capture | Capture d écran'),
    ('Blue'),
    ('uOSyllabus'),
    ('Other | Autre');

INSERT INTO TOPICS(SOFTWARE_ID, PROB) VALUES
    (1, 'Unable to login | Incapable de se connecter'),
    (1, 'Import content | Importer du contenu'),
    (1, 'Add files | Ajouter du contenu'),
    (1, 'Grade book | Carnet de notes'),
    (1, 'Groups | Groupes'),
    (1, 'Discussions'),
    (1, 'Rubrics | Rubriques'),
    (1, 'Assignments | Devoir'),
    (2, 'Unable to login | Incapable de se connecter');


INSERT INTO SUB_TOPICS(TOPIC_ID, SUB_TOPIC) VALUES
    (4, 'Add/Delete Evaluation | Ajouter/Supprimer une évaluation'),
    (4, 'Add/Modify grades | Ajouter/Modifier des notes'),
    (4, 'Import/Export grades | Importer/Exporter des notes'),
    (5, 'Setup groups | Crée des groupes'),
    (6, 'Create an Open discussion | Crée une discussion ouvertes'),
    (6, 'Create a group discussion | Crée une discussion de groupe'),
    (6, 'Create single user discussion | Crée une discussion a un utilisateur unique'),
    (8, 'Create an assignment | Crée un devoir'),
    (7, 'Create a rubric | Crée une rubrique'),
    (7, 'Modify an existing rubric | Modifier une rubrique existante');


INSERT INTO STAFF(IDENT) VALUES
    ('DM'), ('EC'), ('GL'), ('JP'), ('MB'),
    ('MP'), ('NV'), ('RR'), ('SL'), ('SV'), ('PW');