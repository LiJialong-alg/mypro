
function mytest() {
    const records = [
        '<tr>\n  <td>1</td>\n  <td>张三</td>\n  <td>320.50</td>\n  <td>收入</td>\n  <td>兼职报酬（设计稿）</td>\n  <td>2019-02-14 10:15</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>2</td>\n  <td>李四</td>\n  <td>58.20</td>\n  <td>支出</td>\n  <td>晚餐 - 火锅</td>\n  <td>2019-05-03 19:22</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>3</td>\n  <td>淘宝</td>\n  <td>499.99</td>\n  <td>支出</td>\n  <td>家电购物 - 电饭煲</td>\n  <td>2019-11-20 21:15</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>4</td>\n  <td>房东</td>\n  <td>2500.00</td>\n  <td>支出</td>\n  <td>房租（含物业）</td>\n  <td>2020-07-01 09:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>5</td>\n  <td>公司报销</td>\n  <td>120.00</td>\n  <td>收入</td>\n  <td>差旅报销 - 公交费</td>\n  <td>2020-08-05 13:20</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>6</td>\n  <td>拼多多</td>\n  <td>45.60</td>\n  <td>支出</td>\n  <td>生活用品 - 洗发水</td>\n  <td>2020-10-12 16:05</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>7</td>\n  <td>支付宝转账</td>\n  <td>200.00</td>\n  <td>支出</td>\n  <td>给朋友报销电影票</td>\n  <td>2021-01-09 20:40</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>8</td>\n  <td>工资（公司A）</td>\n  <td>8200.00</td>\n  <td>收入</td>\n  <td>9月工资（税后）</td>\n  <td>2021-09-30 09:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>9</td>\n  <td>超市</td>\n  <td>236.75</td>\n  <td>支出</td>\n  <td>周末采购 - 食材、零食</td>\n  <td>2021-12-18 17:30</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>10</td>\n  <td>医生诊所</td>\n  <td>180.00</td>\n  <td>支出</td>\n  <td>门诊挂号费 + 药品</td>\n  <td>2022-02-03 11:05</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>11</td>\n  <td>朋友小刘</td>\n  <td>150.00</td>\n  <td>收入</td>\n  <td>借款偿还</td>\n  <td>2022-03-01 14:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>12</td>\n  <td>滴滴出行</td>\n  <td>32.40</td>\n  <td>支出</td>\n  <td>接送机-行程费用</td>\n  <td>2022-04-10 06:50</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>13</td>\n  <td>京东</td>\n  <td>1299.00</td>\n  <td>支出</td>\n  <td>笔记本升级内存</td>\n  <td>2022-06-22 15:42</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>14</td>\n  <td>公司报销</td>\n  <td>560.00</td>\n  <td>收入</td>\n  <td>差旅报销 - 机票</td>\n  <td>2022-08-16 12:10</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>15</td>\n  <td>房东</td>\n  <td>2550.00</td>\n  <td>支出</td>\n  <td>房租（押一付三）</td>\n  <td>2022-11-01 09:05</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>16</td>\n  <td>理财收益</td>\n  <td>48.75</td>\n  <td>收入</td>\n  <td>货币基金收益</td>\n  <td>2023-01-15 08:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>17</td>\n  <td>花店</td>\n  <td>120.00</td>\n  <td>支出</td>\n  <td>生日花束</td>\n  <td>2023-03-21 10:30</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>18</td>\n  <td>宠物医院</td>\n  <td>320.40</td>\n  <td>支出</td>\n  <td>犬类疫苗 + 驱虫</td>\n  <td>2023-05-02 09:45</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>19</td>\n  <td>国家税务局</td>\n  <td>1400.00</td>\n  <td>支出</td>\n  <td>个税补缴</td>\n  <td>2023-06-30 14:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>20</td>\n  <td>兼职（翻译）</td>\n  <td>420.00</td>\n  <td>收入</td>\n  <td>论文翻译 - 英译中</td>\n  <td>2023-09-08 22:10</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>21</td>\n  <td>餐厅 - 小川家</td>\n  <td>89.60</td>\n  <td>支出</td>\n  <td>朋友聚餐（含酒水）</td>\n  <td>2023-10-14 18:50</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>22</td>\n  <td>网贷还款</td>\n  <td>300.00</td>\n  <td>支出</td>\n  <td>信用卡分期还款</td>\n  <td>2024-01-05 09:30</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>23</td>\n  <td>学校（学费）</td>\n  <td>3500.00</td>\n  <td>支出</td>\n  <td>短期培训班学费</td>\n  <td>2024-02-20 10:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>24</td>\n  <td>公司红包</td>\n  <td>200.00</td>\n  <td>收入</td>\n  <td>节日奖金</td>\n  <td>2024-02-10 09:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>25</td>\n  <td>影院</td>\n  <td>58.00</td>\n  <td>支出</td>\n  <td>电影票 - 特价场</td>\n  <td>2024-03-12 20:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>26</td>\n  <td>理财赎回</td>\n  <td>1020.35</td>\n  <td>收入</td>\n  <td>定期理财到期赎回</td>\n  <td>2024-05-30 08:15</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>27</td>\n  <td>维修店</td>\n  <td>420.99</td>\n  <td>支出</td>\n  <td>手机屏幕更换</td>\n  <td>2024-06-18 11:25</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>28</td>\n  <td>快递退款</td>\n  <td>39.90</td>\n  <td>收入</td>\n  <td>商品退货退款</td>\n  <td>2024-07-02 16:40</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>29</td>\n  <td>旅游社</td>\n  <td>2280.00</td>\n  <td>支出</td>\n  <td>国内三日游（含住宿）</td>\n  <td>2024-08-22 07:20</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>30</td>\n  <td>股息收入</td>\n  <td>75.60</td>\n  <td>收入</td>\n  <td>股票分红</td>\n  <td>2024-09-30 18:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>31</td>\n  <td>便利店</td>\n  <td>15.80</td>\n  <td>支出</td>\n  <td>夜宵 - 饮料零食</td>\n  <td>2024-10-05 23:12</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>32</td>\n  <td>维修公司</td>\n  <td>980.00</td>\n  <td>支出</td>\n  <td>空调检修 + 配件</td>\n  <td>2025-01-11 10:50</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>33</td>\n  <td>朋友小王</td>\n  <td>100.00</td>\n  <td>收入</td>\n  <td>借出款项归还</td>\n  <td>2025-02-02 13:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>34</td>\n  <td>社保局</td>\n  <td>320.00</td>\n  <td>支出</td>\n  <td>社保补缴</td>\n  <td>2025-03-15 09:10</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>35</td>\n  <td>咖啡店 - 星章</td>\n  <td>28.50</td>\n  <td>支出</td>\n  <td>加班咖啡</td>\n  <td>2025-04-09 22:05</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>36</td>\n  <td>保险理赔</td>\n  <td>1500.00</td>\n  <td>收入</td>\n  <td>车险理赔（事故）</td>\n  <td>2025-05-20 15:30</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>37</td>\n  <td>京东</td>\n  <td>39.99</td>\n  <td>支出</td>\n  <td>厨房小工具</td>\n  <td>2025-06-12 14:44</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>38</td>\n  <td>退款 - 商家A</td>\n  <td>88.00</td>\n  <td>收入</td>\n  <td>商品质量问题退款</td>\n  <td>2025-07-01 10:20</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>39</td>\n  <td>地铁</td>\n  <td>6.00</td>\n  <td>支出</td>\n  <td>上班交通费（单程）</td>\n  <td>2025-07-15 08:05</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>40</td>\n  <td>兼职（线上授课）</td>\n  <td>680.00</td>\n  <td>收入</td>\n  <td>语文家教 - 两小时</td>\n  <td>2025-08-20 19:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>41</td>\n  <td>便利店</td>\n  <td>12.50</td>\n  <td>支出</td>\n  <td>早餐 - 三明治</td>\n  <td>2025-08-25 07:45</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>42</td>\n  <td>朋友小陈</td>\n  <td>200.00</td>\n  <td>收入</td>\n  <td>合伙项目分红</td>\n  <td>2025-09-10 11:30</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>43</td>\n  <td>维修店</td>\n  <td>220.20</td>\n  <td>支出</td>\n  <td>洗衣机门锁更换</td>\n  <td>2025-09-28 13:55</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>44</td>\n  <td>拼多多</td>\n  <td>9.90</td>\n  <td>支出</td>\n  <td>小件促销 - 数据线</td>\n  <td>2025-10-01 18:10</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>45</td>\n  <td>公司工资</td>\n  <td>9500.00</td>\n  <td>收入</td>\n  <td>10月工资（含绩效）</td>\n  <td>2025-10-20 09:05</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>46</td>\n  <td>车险</td>\n  <td>680.00</td>\n  <td>支出</td>\n  <td>年度商业险续保</td>\n  <td>2024-11-15 10:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>47</td>\n  <td>还款 - 银行A</td>\n  <td>1200.00</td>\n  <td>支出</td>\n  <td>信用卡最低还款</td>\n  <td>2023-12-01 09:10</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>48</td>\n  <td>退款 - 电商B</td>\n  <td>199.99</td>\n  <td>收入</td>\n  <td>重复下单退款</td>\n  <td>2022-12-28 15:45</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>49</td>\n  <td>健身房</td>\n  <td>320.00</td>\n  <td>支出</td>\n  <td>年度会员费</td>\n  <td>2021-04-01 09:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>50</td>\n  <td>礼物 - 妈妈</td>\n  <td>260.00</td>\n  <td>支出</td>\n  <td>节日礼物（保健品）</td>\n  <td>2020-05-12 14:20</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>51</td>\n  <td>科技论坛稿酬</td>\n  <td>420.00</td>\n  <td>收入</td>\n  <td>投稿文章稿酬</td>\n  <td>2019-09-18 10:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>52</td>\n  <td>车贷</td>\n  <td>1800.00</td>\n  <td>支出</td>\n  <td>月供 - 车贷</td>\n  <td>2021-03-05 09:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>53</td>\n  <td>医生诊所</td>\n  <td>56.30</td>\n  <td>支出</td>\n  <td>牙科清洁</td>\n  <td>2022-10-10 11:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>54</td>\n  <td>朋友小赵</td>\n  <td>75.00</td>\n  <td>收入</td>\n  <td>拼车分摊</td>\n  <td>2023-07-07 18:20</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>55</td>\n  <td>电费</td>\n  <td>210.45</td>\n  <td>支出</td>\n  <td>居民用电（四月账单）</td>\n  <td>2024-04-12 08:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>56</td>\n  <td>稿费 - 杂志B</td>\n  <td>300.00</td>\n  <td>收入</td>\n  <td>专栏稿酬（科技类）</td>\n  <td>2024-06-25 10:30</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>57</td>\n  <td>外卖</td>\n  <td>48.20</td>\n  <td>支出</td>\n  <td>午餐 - 公司附近</td>\n  <td>2025-02-19 12:15</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>58</td>\n  <td>股市卖出</td>\n  <td>1250.75</td>\n  <td>收入</td>\n  <td>卖出部分持仓获利</td>\n  <td>2025-03-28 14:50</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>59</td>\n  <td>书店</td>\n  <td>68.90</td>\n  <td>支出</td>\n  <td>专业书籍购买</td>\n  <td>2025-04-03 16:30</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>',
        '<tr>\n  <td>60</td>\n  <td>公司年终奖</td>\n  <td>5200.00</td>\n  <td>收入</td>\n  <td>2024年年终绩效奖金</td>\n  <td>2024-12-25 09:00</td>\n  <td>\n    <a href="javascript:void(0);">删除</a>\n  </td>\n</tr>'
    ];

    localStorage.setItem('arr', JSON.stringify(records))
    localStorage.setItem('id', records.length + 1)
}


let basearr = JSON.parse(localStorage.getItem('arr')) || []
let arr = basearr
let i = +localStorage.getItem('id') || 1
const name = document.querySelector('.uname')
const money = document.querySelector('.money')
const way = document.querySelector('.way')
const date = document.querySelector('.date')
const time = document.querySelector('.time')
const details = document.querySelector('.details')

const findway = document.querySelector('.findway')
const find = document.querySelector('.find')

const tbody = document.querySelector('tbody')
const nums = document.querySelector('.title span')
const footer = document.querySelector('.footer')


if (basearr.length === 0 && confirm('是否导入模拟数据？')) {
    mytest()
    location.reload()
}


function draw(a = []) {
    arr = a
    // console.log(arr)
    let myin = 0
    let myout = 0

    tbody.innerHTML = ''
    tbody.innerHTML = a.join('')
    nums.innerHTML = `${a.length}`

    for (let j = 0; j < a.length; j++) {
        const mytb = document.createElement('tbody')
        mytb.innerHTML = a[j]
        if (mytb.children[0].children[3].innerHTML === '收入') {
            myin += +mytb.children[0].children[2].innerHTML
        }
        else {
            myout += +mytb.children[0].children[2].innerHTML
        }
    }
    if (myin || myout) {
        footer.style.display = 'flex'
        document.querySelector('.footer .in').innerHTML = myin.toFixed(2)
        document.querySelector('.footer .out').innerHTML = myout.toFixed(2)
    }
    else {
        footer.style.display = 'none'
    }


}
draw(basearr)

function myfind(index) {

    let arrfind = []
    // console.log(find.value)
    for (let j = 0; j < basearr.length; j++) {
        const mytb = document.createElement('tbody')
        mytb.innerHTML = basearr[j]
        // console.log(mytb.children[0].children[index].innerHTML)
        if (+index === 2 || +index === 0) {
            if (+mytb.children[0].children[index].innerHTML === +find.value) {
                arrfind.push(basearr[j])
            }
        }
        else if (mytb.children[0].children[index].innerHTML.includes(find.value)) {
            arrfind.push(basearr[j])
        }
    }
    // console.log(arrfind)
    if (arrfind.length === 0) {
        alert('没有相关数据记录')
    }
    else
        draw(arrfind)
}

document.querySelector('.info').addEventListener('submit', function (e) {
    e.preventDefault()

    if (name.value && money.value && !isNaN(Number(money.value)) && way.value) {
        if (time.value && date.value) {

            basearr.push(`
            <tr>
              <td>${i}</td>
              <td>${name.value}</td>
              <td>${money.value}</td>
              <td>${way.value}</td>
              <td>${details.value}</td>
              <td>${date.value} ${time.value}</td>
              <td>
                <a href="javascript:">删除</a>
              </td>
            </tr>
        `)

        }
        else if (time.value || date.value) {
            e.preventDefault()
            alert('请输入完整时间')
            return
        }
        else {
            basearr.push(`
            <tr>
              <td>${i}</td>
              <td>${name.value}</td>
              <td>${money.value}</td>
              <td>${way.value}</td>
              <td>${details.value}</td>
              <td>${new Date().toLocaleString(undefined, {
                hour12: false,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).replace(/\//g, '-')}</td>
              <td>
                <a href="javascript:">删除</a>
              </td>
            </tr>
        `)
        }




        draw(basearr)
        i++
        localStorage.setItem('arr', JSON.stringify(basearr))
        localStorage.setItem('id', i)
        alert('已成功添加')
        // console.log(arr)
    }

    else {
        e.preventDefault()
        alert('请输入正确的内容')
    }

})

document.querySelector('.info2').addEventListener('submit', function (e) {
    e.preventDefault()
    if (!find.value) {
        draw(basearr)
        return
    }
    switch (findway.value) {
        case '按交易号':
            myfind(0)
            break;
        case '按交易对象':
            myfind(1)
            break;
        case '按交易金额':
            myfind(2)
            break;
        case '按交易方式':
            myfind(3)
            break;
        case '按备注':
            myfind(4)
            break;
        case '按时间':
            myfind(5)
            break;

    }
})

document.querySelector('tbody').addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.tagName == 'A' && confirm('确认删除所选记录？')) {
        for (let j = 0; j < basearr.length; j++) {
            let mytb = document.createElement('tbody')
            mytb.innerHTML = basearr[j]
            // console.log(mytb)
            if (mytb.children[0].children[0].innerHTML === e.target.parentNode.parentNode.children[0].innerHTML) {
                basearr.splice(j, 1)
                break;
            }
        }

        localStorage.setItem('arr', JSON.stringify(basearr))

        for (let j = 0; j < arr.length; j++) {
            let mytb = document.createElement('tbody')
            mytb.innerHTML = arr[j]
            // console.log(mytb)
            if (mytb.children[0].children[0].innerHTML === e.target.parentNode.parentNode.children[0].innerHTML) {
                arr.splice(j, 1)
                break;
            }
        }
        draw(arr)

    }

})

document.querySelector('.title .clearall').addEventListener('click', function () {

    if (confirm('确认清空所有历史记录？')) {
        localStorage.clear()
        basearr = []
        draw(basearr)
    }

})

