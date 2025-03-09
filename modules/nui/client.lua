
--@param arg
-- A boolean that determines if the NUI is visible
function OpenNui(arg)
    SetNuiFocus(arg, arg)
    SendNUIMessage({
      action = 'setVisible',
      data = arg
    })
end


RegisterCommand('open-ui', function()
    OpenNui(true)
end)


--@param data
-- Simple callback that closes the NUI
RegisterNUICallback('hide-ui', function(data, cb)
    
    OpenNui(false)

    if cb then
        cb({
            status = "ok"
        })
    end

end)
  

--@param cb
-- A callback function that returns the locale from the config file
RegisterNUICallback('getLocale', function(_, cb)
    cb(Config.Locale)
end) 