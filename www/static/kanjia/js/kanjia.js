$(document).ready(function() {
    // body...
    // var path = window.location.pathname;
    // console.log(path);
    // var id =333;// path.match("[0-9]+")[0];

    // var img_list = $(".introduction_content img");
    // for (var i = 0; i < img_list.length; i++) { //循环为每个img设置
    //     img_list[i].removeAttribute("width");
    //     //img_list[i].attr("width", "100%");
    //     img_list[i].removeAttribute("height");
    //     img_list[i].removeAttribute("style");
    // }

    // var pay_type1 = $("#pay_type");
    // if (pay_type1.val() == "1") {
    //     $("#enroll_button").val("已报名");
    // }
    // else if(pay_type1.val() == "2"){
    // 	$("#enroll_button").val("已付费参加");
    // }

    // 帮自己砍价，砍价
    $("#ewm_btns").click(function() {
        $("#wx_qr_modal").modal('show');
    });
    // $("#myplay").click(function() {
    //     $("#enroll_modal").modal('show');
    // });
    $("#helpBtn").click(function() {
        $("#wx_qr_modal").modal('show');
    });
    //     // 支付弹窗
    //     // $("#qr_code").removeClass("hidden");
    //     // var pay_type = $("#pay_type");
    //     // 未报名
    //     if (pay_type.val() == "0") {
    //         $("#enroll_modal").modal('show');
    //     } else //已报名
    //     {
    //         if ($('#price').val() == '0') {
    //             $("#free_show").removeClass("hidden");
    //         } else {
    //             $("#qr_code").removeClass("hidden");
    //         }
    //         $("#modal_body").addClass("hidden");
    //         $("#enroll_modal").modal('show');
    //     }
    // });


});

    function myplayjoin(did,wxuid) {
        console.log("did=" + did);
        console.log("wxuid=" + wxuid);
        var user_name = $("#user_name");
        var user_phone = $("#user_phone");
        document.getElementById('enroll_btn').disabled=true;
        if (user_name.val().length == 0 || user_phone.val().length == 0) {
            alert("用户名和手机号不能为空");
            document.getElementById('enroll_btn').disabled=false;
            return;
        }
        if (user_phone.val().length != 11) {
            alert("请输入正确的手机号");
            document.getElementById('enroll_btn').disabled=false;
            return;
        }
        $("#modal_body").addClass("hidden");
        //报名参加
        $.ajax({
            url: "/uc/kanjia/myplayjoin",
            method: "post",
            data: {
                "docid": did,
                "name": user_name.val(),
                "phone": user_phone.val(),
                "wxuid":wxuid
            },
            success: function(data) {
                document.getElementById('enroll_btn').disabled=false;
                $("#modal_body").addClass("hidden");
                console.log(JSON.stringify(data));
                if (data.msg ) {
                    alert(data.msg);
                }
                if (data.url) {
                    window.location.href=data.url;
                }

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById('enroll_btn').disabled=false;
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });
    };
    function takanjia(did,wxuid,lprice,hprice,djprice,nowprice,url) {
        console.log("did=" + did);
        console.log("wxuid=" + wxuid);
        // "lprice":222,
        //          "hprice":777,
        //          "djprice":99,
        //          "nowprice":1000
        //报名参加
        $.ajax({
            url: url,
            method: "post",
            data: {
                "docid": did,
                "wxuid": wxuid,
                "lprice":lprice,
                "hprice":hprice,
                "djprice":djprice,
                "nowprice":nowprice
            },
            success: function(data) {
                // document.getElementById('enroll_btn').disabled=false;
                console.log(JSON.stringify(data));
                if (data.msg ) {
                    alert(data.msg);
                }
                if (data.url) {
                    window.location.href=data.url;
                }

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                // document.getElementById('enroll_btn').disabled=false;
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });

    };
    function myplay(did,myuid) {
        console.log("did=" + did);
        console.log("myuid=" + myuid);
        
        //报名参加
        $.ajax({
            url: "/uc/kanjia/myplay",
            method: "post",
            data: {
                "docid": did,
                "wxuid": myuid,
            },
            success: function(data) {
                // document.getElementById('enroll_btn').disabled=false;
                console.log(JSON.stringify(data));
                if (data.msg ) {
                    alert(data.msg);
                }
                if (data.url) {
                    window.location.href=data.url;
                }
                if(data.status==1){
                    $("#enroll_modal").modal('show');
                }

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                // document.getElementById('enroll_btn').disabled=false;
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });

    };

