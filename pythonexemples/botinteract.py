nome = input("Come ti chiami? ")
print(f"Ciao {nome}!")
umore = input("Come va oggi? 😊 ")
if umore.lower() in ["bene", "benissimo", "fantastico"]:
    print("Mi fa davvero piacere sentirlo!")
elif umore.lower() in ["così così", "meh", "non tanto bene"]:
    print("Coraggio! Anche i giorni grigi passano ☁️")
else:
    print("Grazie per aver condiviso, sono qui per tenerti compagnia!")
