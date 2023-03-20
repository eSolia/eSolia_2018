#!/usr/bin/env bash

# echo "Delete seminar data..."
# rm -rf data/seminars.json
# echo "Refresh seminar data..."
# /usr/local/opt/curl/bin/curl --silent -k "https://pro.dbflex.net/secure/api/v2/55317/$(cat $HOME/.ssh/tokens/jvad-01)/Seminar/List%20All%20for%20JSON/select.json" | jq '.' > data/seminars.json
echo "Setup PROdb API Token in Env..."
export PRODBTOKEN15331=$(cat $HOME/.ssh/tokens/prodb-01)

echo "Get json files..."
rm -i -rf $HOME/dev/eSolia_2018/data/success.json
/usr/local/opt/curl/bin/curl --silent -k "https://pro.dbflex.net/secure/api/v2/15331/$(cat $HOME/.ssh/tokens/prodb-01)/Web%20Project/List%20All%20for%20JSON/select.json" | /usr/local/bin/jq '.' > $HOME/dev/eSolia_2018/data/success.json
rm -i -rf $HOME/dev/eSolia_2018/data/info.json
/usr/local/opt/curl/bin/curl --silent -k "https://pro.dbflex.net/secure/api/v2/15331/$(cat $HOME/.ssh/tokens/prodb-01)/Web%20Information/List%20All%20on%20Website/select.json" | /usr/local/bin/jq '.' > $HOME/dev/eSolia_2018/data/info.json
rm -i -rf $HOME/dev/eSolia_2018/data/japancontact.json
/usr/local/opt/curl/bin/curl --silent -k "https://pro.dbflex.net/secure/api/v2/15331/$(cat $HOME/.ssh/tokens/prodb-01)/Web%20Japan%20Contact%20and%20App/API%20List%20All/select.json" | /usr/local/bin/jq '.' > $HOME/dev/eSolia_2018/data/japancontact.json
rm -i -rf $HOME/dev/eSolia_2018/data/japanapp.json
/usr/local/opt/curl/bin/curl --silent -k "https://pro.dbflex.net/secure/api/v2/15331/$(cat $HOME/.ssh/tokens/prodb-01)/Web%20Japan%20Contact%20and%20App/API%20List%20All%20Apps/select.json" | /usr/local/bin/jq '.' > $HOME/dev/eSolia_2018/data/japanapp.json
rm -i -rf $HOME/dev/eSolia_2018/static/eSolia-Japan-Emergency-Contacts.en.csv
/usr/local/opt/curl/bin/curl --silent -k "https://pro.dbflex.net/secure/api/v2/15331/$(cat $HOME/.ssh/tokens/prodb-01)/Web%20Japan%20Contact%20and%20App/API%20List%20for%20CSV/select.csv" -o $HOME/dev/eSolia_2018/static/eSolia-Japan-Emergency-Contacts.en.csv
rm -i -rf $HOME/dev/eSolia_2018/static/eSolia-Japan-Emergency-Contacts.ja.csv
/usr/local/opt/curl/bin/curl --silent -k "https://pro.dbflex.net/secure/api/v2/15331/$(cat $HOME/.ssh/tokens/prodb-01)/Web%20Japan%20Contact%20and%20App/API%20List%20for%20CSV%E2%80%A1/select.csv" -o $HOME/dev/eSolia_2018/static/eSolia-Japan-Emergency-Contacts.ja.csv

echo "Serve hugo (ctrl-c to exit)..."
cd $HOME/dev/eSolia_2018
hugo server --navigateToChanged --buildDrafts --buildFuture --watch --verbose --source="$HOME/dev/eSolia_2018" --config="$HOME/dev/eSolia_2018/config.toml" --port=1366 --enableGitInfo --ignoreCache

