# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Input: number
# Output: string interpolation
# Create a conditional statement that checks whether the input is odd or even

def even_or_odd? number
    if number % 2 == 0
        "#{number} is even"
    elsif number % 2 == 1
        "#{number} is odd"
    end
end

p even_or_odd?(7)
p even_or_odd?(42)
p even_or_odd?(221)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# input: string
# output: string without vowels
# Use .delete to remove characters

def remove_vowels string
    string.delete("aeiouAEIOU")
end

p remove_vowels(beatles_album1)
p remove_vowels(beatles_album2)
p remove_vowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# Input: string
# Output: string interpolation
# Create conditional statement to see if word is the same spelled forward or backwards
# Use .upcase to compare uppercase values

def palindrome? string
    if string.upcase == string.reverse.upcase
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end
end

p palindrome?(palindrome_test_case1)
p palindrome?(palindrome_test_case2)
p palindrome?(palindrome_test_case3)