import pandas as pd
import json

# Function to check if the region name is valid (not NaN or metadata)
def is_valid_region(region):
    if pd.isna(region):
        return False
    if "Kód" in region or "Zdroj" in region:
        return False
    return True

for i in range(8):
    j = str(i+1)
    
    # Load the Excel file
    file_path = f'DATA({j}).xlsx'  # Updated to use f-string for file path

    # Read the Excel file, skipping initial irrelevant rows
    df = pd.read_excel(file_path, header=4)

    # Drop rows and columns with all NaN values
    df_cleaned = df.dropna(how='all').reset_index(drop=True)
    df_cleaned = df_cleaned.dropna(axis=1, how='all')
    print(df_cleaned)

    # Check the number of columns to match the correct number of headers
    if len(df_cleaned.columns) == 8:
        df_cleaned.columns = ['Region', 'Průměrná měsíční mzda (celkem)', 'Průměrná měsíční mzda (muži)', 
                              'Průměrná měsíční mzda (ženy)', 'Medián měsíčních mezd (celkem)', 
                              'Medián měsíčních mezd (muži)', 'Medián měsíčních mezd (ženy)', 'Extra Column']
        df_cleaned = df_cleaned.drop(columns=['Extra Column'])  # Drop the extra column
    elif len(df_cleaned.columns) == 7:
        df_cleaned.columns = ['Region', 'Průměrná měsíční mzda (celkem)', 'Průměrná měsíční mzda (muži)', 
                              'Průměrná měsíční mzda (ženy)', 'Medián měsíčních mezd (celkem)', 
                              'Medián měsíčních mezd (muži)', 'Medián měsíčních mezd (ženy)']

    # Filter out rows where the 'Region' column contains metadata or NaN
    df_cleaned = df_cleaned[df_cleaned['Region'].apply(is_valid_region)]

    # Create a dictionary from the DataFrame
    data = df_cleaned.set_index('Region').T.to_dict()

    # Convert the dictionary to JSON
    json_data = json.dumps(data, indent=4, ensure_ascii=False)

    # Write the JSON data to a file
    output_filename = f'output_data_{j}.json'  # Use f-string for output filename
    #with open(output_filename, 'w', encoding='utf-8') as f:
    #    f.write(json_data)

    print(f"Data successfully converted to JSON and saved as '{output_filename}'")
