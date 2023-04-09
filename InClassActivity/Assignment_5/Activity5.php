<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="newStyle.css">
    <title>Exchange rate</title>
</head>


<body>
    <main>

       <!-- Exchange rate conversion form -->
        <form method="POST" action="Activity6.php" style="display:inline-block">

            From: <input type="number" name="from_amount" placeholder="0" style="margin-left: 20px;"/>
            Currency: <select name="base_currency">
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>
            </select></br>
            To: <input type="number" name="to_amount" placeholder="0"style="margin-left: 38px;"/>
            Currency:<select name="target_currency">
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>
            </select></br>

            <button type="submit" style='margin-top: 20px;'>Convert</button>

        </form>
        <div>

            <table table  >
                <tr>
                    <th>Currency</th>
                    <th>Symbol</th>

                </tr>
                <tr>
                    <td>US Dollar</td>
                    <td>USD</td>

                </tr>
                <tr>
                    <td>Canadian Dollar</td>
                    <td>CAD</td>

                </tr>
                <tr>
                    <td>Euro</td>
                    <td>EUR</td>

                </tr>
            </table>

        </div>

    </main>
</body>

</html>