# vigenere_cipher_theekshani.py
# A basic implementation of the Vigenère Cipher

def encrypt_vigenere(plaintext, key):
    encrypted = ""
    key_index = 0

    for char in plaintext:
        if char.isalpha():
            shift = ord(key[key_index % len(key)].lower()) - ord('a')
            base = ord('A') if char.isupper() else ord('a')
            encrypted += chr((ord(char) - base + shift) % 26 + base)
            key_index += 1
        else:
            encrypted += char
    return encrypted

def decrypt_vigenere(ciphertext, key):
    decrypted = ""
    key_index = 0

    for char in ciphertext:
        if char.isalpha():
            shift = ord(key[key_index % len(key)].lower()) - ord('a')
            base = ord('A') if char.isupper() else ord('a')
            decrypted += chr((ord(char) - base - shift) % 26 + base)
            key_index += 1
        else:
            decrypted += char
    return decrypted

# Example usage
plaintext = "HELLO WORLD"
key = "KEY"
cipher = encrypt_vigenere(plaintext, key)
print("Encrypted:", cipher)
print("Decrypted:", decrypt_vigenere(cipher, key))
