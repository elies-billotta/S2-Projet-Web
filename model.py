import sqlite3

#------------------------------ FUNCTIONS ------------------------------#

def get_random_film():
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    cur = connection.cursor()
    res = cur.execute('SELECT * FROM film ORDER BY RANDOM() LIMIT 1').fetchone()
    movie = Film(res[2], res[1], res[3], res[4])
    return movie

def get_random_film_by_difficulte(difficulte):
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    cur = connection.cursor()
    res = cur.execute('SELECT * FROM film WHERE difficulte = ? ORDER BY RANDOM() LIMIT 1', (difficulte,)).fetchone()
    movie = Film(res[2], res[1], res[3], res[4])
    return movie

def get_difficulte():
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    cur = connection.cursor()
    res = cur.execute('SELECT * FROM difficulte').fetchall()
    print(res)
    difficulte = []
    for row in res:
        difficulte.append(Difficulte(row[0]))
    return difficulte

def get_leaderboard():
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    cur = connection.cursor()
    res = cur.execute('SELECT * FROM joueur ORDER BY score DESC LIMIT 10').fetchall()
    leaderboard = []
    for row in res:
        print(row[1], row[2])
        leaderboard.append(Joueur(row[1], row[2]))
    return leaderboard


#------------------------------ CLASSES ------------------------------#

class Film : 
    def __init__(self, nom,  image, description, difficulte):
        self.nom = nom
        self.image = image
        self.description = description
        self.difficulte = difficulte

    def get_nom(self):
        return self.nom

    def get_image(self):
        return self.image

    def get_description(self):
        return self.description

    def get_difficulte(self):
        return self.difficulte
    
class Joueur : 
    def __init__(self, nom, score):
        self.nom = nom
        self.score = score

    def get_nom(self):
        return self.nom

    def get_score(self):
        return self.score

class Difficulte : 
    def __init__(self, nom):
        self.nom = nom

    def get_nom(self):
        return self.nom

class Genre :
    def __init__(self, nom):
        self.nom = nom

    def get_nom(self):  
        return self.nom