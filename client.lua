
local function OpenNui(arg)
  SetNuiFocus(arg, arg)
  SendNUIMessage({
    action = 'setVisible',
    data = arg
  })
end

RegisterCommand('open-ui', function()
  OpenNui(true)
end)

RegisterNUICallback('hide-ui', function(data, cb)
  OpenNui(false)
  if cb then
    cb({
      status = "ok"
    })
  end
end)

RegisterNUICallback('getLocale', function(_, cb)
  cb(Config.Locale)
end) 