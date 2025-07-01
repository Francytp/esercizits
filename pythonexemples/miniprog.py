 # 1. Chiede nome e età
nome = input("Come ti chiami? ")
eta = int(input("Quanti anni hai? "))

# 2. Determina se è maggiorenne
if eta >= 18:
    stato = "maggiorenne"
else:
    stato = "minorenne"

# 3. Messaggio personalizzato
print(f"\nCiao {nome}, hai {eta} anni e sei {stato}!")

# 4. Chiede un numero n e stampa da 1 a n
n = int(input("\nInserisci un numero: "))
print(f"Ecco i numeri da 1 a {n}:")

for i in range(1, n + 1):
    print(i)

# 5. Se n > 10, mostra se è pari o dispari
if n > 10:
    if n % 2 == 0:
        print(f"\nIl numero {n} è pari.")
    else:
        print(f"\nIl numero {n} è dispari.")
