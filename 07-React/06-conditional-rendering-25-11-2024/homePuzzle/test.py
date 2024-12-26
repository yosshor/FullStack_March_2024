
def sum_values_for_placement(placement_table: pd.DataFrame, ftds: pd.DataFrame ) -> pd.DataFrame:
    """
    Calculate the sum of metrics grouped by placement and account.

    Args:
        placement_table (pd.DataFrame): DataFrame containing placement and account metrics.

    Returns:
        pd.DataFrame: DataFrame with the sum of metrics grouped by placement and account.

    Description:
        This function takes a DataFrame containing metrics grouped by placement and account
        and calculates the sum of metrics such as cost, conversions, interactions, impressions,
        FTD approved conversions, and offline deposit conversions. It returns a new DataFrame
        with the summed values for each placement and account combination.
    """
    
    # Group by 'placement' and 'account' and calculate sums
    sum_per_placement = placement_table.groupby(['placement', 'account']).agg({
        'cost': 'sum',
        'conversions': 'sum',
        'interactions': 'sum',
        'impressions': 'sum'
    }).reset_index()

    # Perform a left join with the additional table
    result = sum_per_placement.merge(
        ftds,
        on=['placement', 'account'],
        how='left'
    )
    
    # Display the result (optional)
    #print(sum_per_placement)

    return result



    google_ads_urls_data.py
    # Sum values for each unique placement and create a DataFrame
    df_with_conversion = sum_values_for_placement(df_with_conversion, result)
    