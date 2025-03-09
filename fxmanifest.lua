fx_version "cerulean"

games {
  "gta5",
  "rdr3"
}

author "huh"
description "React & Mantine React Template for FiveM"
version '1.0'

lua54 'yes'

ui_page 'web/build/index.html'

shared_scripts {
  '@ox_lib/init.lua',
  '@es_extended/imports.lua',
  'config.lua',
}

client_scripts {
  'client.lua',
  'modules/nui/client.lua',
}

server_scripts {
  'server.lua',
  'modules/nui/server.lua',
  '@oxmysql/lib/MySQL.lua'
}

files {
  'web/build/index.html',
  'web/build/**/*',
  'locales/*.json'
}
