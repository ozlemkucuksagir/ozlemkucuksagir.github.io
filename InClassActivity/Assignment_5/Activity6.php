<?php



  // Currency conversion 

        // Exchange rates array
        $exchange_rates = array(
            'USD' => array(
                'CAD' => 1.36,
                'EUR' => 0.91,

            ),
            'EUR' => array(
                'CAD' => 1.47,
                'USD' => 1.10,

            ),
               'CAD' => array(
                'USD' => 0.74,
                'EUR' => 0.67,
            )
        );

        // Get base currency code from user
        $base_currency = isset($_POST['base_currency']) ? $_POST['base_currency'] : '';

        // Get target currency code from user
        $target_currency = isset($_POST['target_currency']) ? $_POST['target_currency'] : '';

        // Get amount to convert from user
        $from_amount = isset($_POST['from_amount']) ? $_POST['from_amount'] : '';

        // If the form is submitted, do the exchange rate conversion and show the result
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            // Checking exchange rate data for base currency code and target currency code
            if (isset($exchange_rates[$base_currency]) && isset($exchange_rates[$base_currency][$target_currency])) {
                // exchange rate
                $exchange_rate = $exchange_rates[$base_currency][$target_currency];

                // Currency conversion
                $to_amount = $from_amount * $exchange_rate;

                // Print the result
                echo "<form action='' method='post'>
                        
                From: <input type='number' name='from' value='$from_amount'style='margin-left: 20px;' />
                Currency: <select name='base_currency'value='$base_currency' >
                <option value='$base_currency'>$base_currency</option>
                    
                </select></br>
            
                To: <input type='number' name='to' value='$to_amount'style='margin-left: 38px;'>
                Currency:<select name='target_currency'>
                    <option value='$target_currency'>$target_currency</option>
                   
                </select></br>
            <button  type='submit'style='margin-top: 38px;' >Convert</button>
        </form>";
            } else {
                //Printing the error status
                echo 'Could not get exchange rate.';
            }
        }
?>