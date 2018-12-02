import random


class Person:
    def __init__(self, name, exceptions=[]):
        self.name = name.lower()
	self.exceptions = map(lambda x: x.lower(), exceptions)

def _verify_list(people_pairs):
    for pair in people_pairs:
        person = pair[0]
        target = pair[1]
	print(person.name)
	print(target.name)
	print(person.exceptions)
	if target.name in person.exceptions:
	    return False
    return True

def _generate_pairs(people_list):
    pairs = []
    for i in range(-1, len(people) - 1):
        person = people_list[i]
	target = people_list[i+1]
	pairs.append((person, target))
    return pairs

def create_pairs(people):
    new_list = list(people)
    random.shuffle(new_list)
    pairs = _generate_pairs(new_list)
    if _verify_list(pairs):
        return pairs
    else:
        return create_pairs(people)

def write_files(pairs):
    for pair in pairs:
        person = pair[0].name
        target = pair[1].name
        with open(person + ".txt", "w") as file:
            file.write(target + "\n")

if __name__=="__main__":
    people = []
    people.append(Person("Sawyer", exceptions=["Giulia"]))
    people.append(Person("Giulia", exceptions=["Chris"]))
    people.append(Person("Chris"))
    pairs = create_pairs(people)
    names = map(lambda x: (x[0].name, x[1].name), pairs)
    print(names)

    write_files(pairs)

