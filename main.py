import os

TEXT = "I left my coding agent unsupervised during GTA 6 launch week and came back to find it had deleted my save file, refactored my whole codebase, and applied for a job at Rockstar on my behalf."

os.makedirs("/output", exist_ok=True)
with open("/output/entry.txt", "w", encoding="utf-8") as f:
    f.write(TEXT)
