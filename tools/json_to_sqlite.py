import json
import sqlite3

with open("questions.json", encoding="utf-8") as f:
    questions = json.load(f)

conn = sqlite3.connect("questions.db")
cursor = conn.cursor()

cursor.execute("DROP TABLE IF EXISTS questions")
cursor.execute("""
CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    option TEXT NOT NULL,
    is_correct TEXT NOT NULL
)
""")

for item in questions:
    for opt in item["options"]:
        cursor.execute("INSERT INTO questions (question, option, is_correct) VALUES (?, ?, ?)",
                       (item["question"], opt["option"], opt["is_correct"]))

conn.commit()
conn.close()
print("导入完成。")