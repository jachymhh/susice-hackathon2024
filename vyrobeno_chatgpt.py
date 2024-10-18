import pandas as pd
import json

def xlsx_to_json(xlsx_file, json_file):
    # Načtení Excel souboru, přeskakování prázdných řádků (data začínají od 5. řádku)
    df = pd.read_excel(xlsx_file, sheet_name='DATA', header=4)

    # Odstranění prázdných sloupců a řádků
    df_cleaned = df.dropna(how='all', axis=1).dropna(how='all', axis=0)

    # Přidání správných názvů sloupců (podle toho, jak jsou v souboru strukturované)
    df_cleaned.columns = ['Region', 'Průměrná_mzda_celkem', 'Průměrná_mzda_muži', 
                          'Průměrná_mzda_ženy', 'Medián_mzda_celkem', 'Medián_mzda_muži', 
                          'Medián_mzda_ženy']

    # Odstranění řádků s popisky (prvních 2 řádků)
    df_cleaned = df_cleaned.iloc[2:].reset_index(drop=True)

    # Převedení DataFrame na JSON
    json_data = df_cleaned.to_json(orient='records', force_ascii=False, indent=4)

    # Uložení JSON do souboru
    with open(json_file, 'w', encoding='utf-8') as f:
        f.write(json_data)

    print(f"Data byla úspěšně převedena do {json_file}")

# Použití skriptu
xlsx_file = 'MZD07.xlsx'  # Název Excel souboru
json_file = 'MZD07.json'       # Název výstupního JSON souboru
xlsx_to_json(xlsx_file, json_file)