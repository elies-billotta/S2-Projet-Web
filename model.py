import sqlite3

class Film : 
    def __init__(self, nom,  image, description, difficulte):
        self.nom = nom
        self.image = image
        self.description = description
        self.difficulte = difficulte

    def get_random_film():
        connection = sqlite3.connect('database.db')
        connection.row_factory = sqlite3.Row
        cur = connection.cursor()
        res = cur.execute('SELECT * FROM film ORDER BY RANDOM() LIMIT 1').fetchone()
        movie = Film(res[1], res[2], res[3], res[4])
        print(movie)
        return movie
    
class Joueur : 
    def __init__(self, name, score):
        self.name = name
        self.score = score

class Difficulte : 
    def __init__(self, nom):
        self.nom = nom

class Genre :
    def __init__(self, nom):
        self.nom = nom