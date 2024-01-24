def get_fibonacci(n):
    fibonacci = [0,1]

    if (n < 0):
        raise ValueError(f"É esperado um número positivo. Foi encontrado {n}.")
    elif n == 0: return []
    elif n == 1: return [fibonacci[0]]
    else:
        for i in range(2, n):
            fibonacci.append(fibonacci[-1] + fibonacci[-2])
    return fibonacci

