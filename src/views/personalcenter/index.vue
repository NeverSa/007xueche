<template>
    <div class="personalcenter_index">
        <div class="box_hd">
            <div class="acc_info">
                <div class="user">
                    <img src="../../assets/img/photo.jpg" alt="" class="img">
                    <div>宗朝阳</div>
                </div>
                <div class="user_info">
                   <span> 绑定手机：186********45</span>
                    <span> 邀请码:12312</span>
                </div>
            </div>
            <div class="icon_list">
                
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.personalcenter_index{
    .box_hd{
        padding: 0px 30px;
        .acc_info{
            border-bottom: 1px solid #efefef;
            padding-bottom: 20px;
            display: flex;
            .user{
                display: flex;
                align-items: center;
                    font-size: 24px;
                font-weight: 400;
            color: #616161;
            }
            .img{
                border-radius: 50%;
                margin-right: 20px;
            }
            .user_info{
                display: flex;
                flex-direction: column;
                text-align: left;
                margin-left: 300px;
                span{
                    margin-top: 20px;
                      color: #757575;
                      font-size: 14px;
                }
            }
        }
    }
}
</style>