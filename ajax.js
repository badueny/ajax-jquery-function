    function ajaxSerialize(methode,url,dataType,formId,callback)
    {
        $.ajax({
            type: methode,
            url: url,
            dataType: dataType,
            data: $('#'+formId).serialize(),
            success: function (a) { 
                callback(a);
            },error:function(b){
                callback(b);
            }
        });
    }

    function ajaxData(methode,url,dataType,data,callback)
    {
        $.ajax({
            type: methode,
            url: url,
            dataType: dataType,
            data: data,
            success: function (a) { 
                callback(a);
            },error:function(b){
                callback(b);
            }
        });
    }

    function ajaxFormData(methode,url,dataType,fData,callback)
    {
        $.ajax({
            type: methode,
            url: url,
            dataType: dataType,
            data: fData,
            processData: !1,
            contentType: !1,
            success: function (a) { 
                callback(a);
            },error:function(b){                
                callback(b);
            }
        });
    }