CREATE TABLE IF NOT EXISTS contacttable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT, 
    prenom TEXT,
    telephone TEXT,
    email TEXT,
    adresse TEXT
);

INSERT or IGNORE INTO contacttable(id, nom, prenom, telephone, email, adresse) VALUES (1, 'OULD DAOUIA', 'Abdelali', '+212663097316', 'a.oulddaouia@gmail.com', '25 Rue Oued Zem, Casablanca');