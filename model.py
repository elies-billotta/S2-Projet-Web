class Film : 
    def __init__(self, name, image, nom, description, difficulte):
        self.name = name
        self.image = image
        self.nom = nom
        self.description = description
        self.difficulte = difficulte

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