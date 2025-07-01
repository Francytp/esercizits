import time

# Codici colore ANSI
ROSSO = "\033[91m"
GIALLO = "\033[93m"
VERDE = "\033[92m"
FINE = "\033[0m"

print(f"{GIALLO}Conto alla rovescia colorato!{FINE}")
time.sleep(1)

for i in range(10, 0, -1):
    if i <= 3:
        colore = ROSSO
    elif i <= 6:
        colore = GIALLO
    else:
        colore = VERDE

    print(f"{colore}{i}{FINE}")
    print("\a")  # suono beep (dipende dal terminale)
    time.sleep(1)

print(f"{GIALLO}🚀 {ROSSO}DECOLLO!{FINE}")
