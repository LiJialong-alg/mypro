
class LedgerApp {
    constructor() {
        this.formAdd = document.querySelector('.info')
        this.formFind = document.querySelector('.info2')
        this.nameEl = document.querySelector('.uname')
        this.moneyEl = document.querySelector('.money')
        this.wayEl = document.querySelector('.way')
        this.dateEl = document.querySelector('.date')
        this.timeEl = document.querySelector('.time')
        this.detailsEl = document.querySelector('.details')
        this.findWayEl = document.querySelector('.findway')
        this.findEl = document.querySelector('.find')
        this.tbody = document.querySelector('tbody')
        this.countSpan = document.querySelector('.title span')
        this.footer = document.querySelector('.footer')

        this.basearr = JSON.parse(localStorage.getItem('arr')) || []
        this.displayArr = this.basearr.slice()
        this.nextId = +localStorage.getItem('id') || 1

        if (this.basearr.length === 0 && confirm('是否导入模拟数据？')) {
            this.importSample()
        }

        this.initEvents()
        this.draw(this.displayArr)
    }

    save() {
        localStorage.setItem('arr', JSON.stringify(this.basearr))
        localStorage.setItem('id', this.nextId)
    }

    importSample() {
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

        this.basearr = records.slice().reverse()
        this.nextId = this.basearr.length + 1
        this.displayArr = this.basearr.slice()
        this.save()
        this.draw(this.displayArr)
    }

    draw(arr) {
        this.displayArr = arr || []
        this.tbody.innerHTML = this.displayArr.join('')
        this.countSpan.innerText = `${this.displayArr.length}`

        let totalIn = 0
        let totalOut = 0
        for (let j = 0; j < this.displayArr.length; j++) {
            const tmp = document.createElement('tbody')
            tmp.innerHTML = this.displayArr[j]
            const cols = tmp.children[0].children
            const amount = parseFloat(cols[2].innerText) || 0
            const type = cols[3].innerText.trim()
            if (type === '收入') totalIn += amount
            else totalOut += amount
        }

        if (totalIn || totalOut) {
            this.footer.style.display = 'flex'
            document.querySelector('.footer .in').innerHTML = totalIn.toFixed(2)
            document.querySelector('.footer .out').innerHTML = totalOut.toFixed(2)
        } else {
            this.footer.style.display = 'none'

        }
        if (this.basearr.length === 0 && this.nextId !== 1) {
            setTimeout(() => {
                if (!confirm('当前已无任何记录，需要让交易号清零重新开始记录吗？')) return
                this.nextId = 1
            }, 100)

        }

    }


    formatNow() {
        return new Date().toLocaleString(undefined, {
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }).replace(/\//g, '-')
    }

    makeRowHtml(id, name, money, way, details, datetime) {
        return `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${Number(money).toFixed(2)}</td>
        <td>${way}</td>
        <td>${details}</td>
        <td>${datetime}</td>
        <td>
          <a href="javascript:void(0);">删除</a>
        </td>
      </tr>
    `
    }

    addRecordFromForm() {
        const name = this.nameEl.value.trim()
        const money = this.moneyEl.value.trim()
        const way = this.wayEl.value
        const date = this.dateEl.value
        const time = this.timeEl.value
        const details = this.detailsEl.value.trim()

        if (!name || !money || isNaN(Number(money)) || !way) {
            alert('请输入完整且正确的内容')
            return
        }

        let datetime
        if (date && time) {
            datetime = `${date} ${time}`
        } else if (date || time) {
            alert('请输入完整时间')
            return
        } else {
            datetime = this.formatNow()
        }

        const rowHtml = this.makeRowHtml(this.nextId, name, money, way, details, datetime)
        this.basearr.unshift(rowHtml)
        this.nextId++
        this.save()
        this.draw(this.basearr.slice())
        setTimeout(() => {
            alert('已成功添加')
        }, 100)

        this.formAdd.reset()
    }

    deleteRecordById(id) {
        id = String(id)
        for (let j = 0; j < this.basearr.length; j++) {
            const tmp = document.createElement('tbody')
            tmp.innerHTML = this.basearr[j]
            const rowId = tmp.children[0].children[0].innerText.trim()
            if (rowId === id) {
                this.basearr.splice(j, 1)
                break
            }
        }
        this.save()
        this.displayArr = this.displayArr.filter(row => {
            const tmp = document.createElement('tbody')
            tmp.innerHTML = row
            return tmp.children[0].children[0].innerText.trim() !== id
        })
        this.draw(this.displayArr)
    }

    clearAll() {
        if (this.displayArr.length === this.basearr.length) {
            if (!confirm('确认清空所有历史记录？')) return
            localStorage.clear()
            this.basearr = []
            this.displayArr = []
            // this.nextId = 1
            this.draw([])
        }
        else {
            if (!confirm('确认清空当前查找到的所有记录？')) return
            const a = []
            for (let j = 0; j < this.displayArr.length; j++) {
                const tmp = document.createElement('tbody')
                tmp.innerHTML = this.displayArr[j]
                a.push(tmp.children[0].children[0].innerText.trim())
            }
            for (let j = 0; j < a.length; j++)
                this.deleteRecordById(a[j])

        }
        // console.log(this.displayArr)

    }

    findRecords() {
        const key = this.findWayEl.value
        const term = this.findEl.value.trim()
        if (!term) {
            this.draw(this.basearr.slice())
            return
        }

        const mapping = {
            '按交易号': 0,
            '按交易对象': 1,
            '按交易金额': 2,
            '按交易方式': 3,
            '按备注': 4,
            '按时间': 5
        }
        const idx = mapping[key]

        const results = []
        for (let j = 0; j < this.basearr.length; j++) {
            const tmp = document.createElement('tbody')
            tmp.innerHTML = this.basearr[j]
            const cellText = tmp.children[0].children[idx].innerText
            if (idx === 0 || idx === 2) {
                if (String(Number(cellText)) === String(Number(term))) {
                    results.push(this.basearr[j])
                }
            } else {
                if (cellText.includes(term)) results.push(this.basearr[j])
            }
        }

        if (results.length === 0) {
            alert('没有相关数据记录')
        } else {
            this.draw(results)
        }
    }


    initEvents() {
        this.formAdd.addEventListener('submit', (e) => {
            e.preventDefault()
            this.addRecordFromForm()
        })

        this.formFind.addEventListener('submit', (e) => {
            e.preventDefault()
            this.findRecords()
        })

        this.tbody.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target
            if (target.tagName === 'A') {
                if (!confirm('确认删除所选记录？')) return
                const tr = target.closest('tr')
                if (!tr) return
                const id = tr.querySelector('td').innerText.trim()
                this.deleteRecordById(id)
            }
        })

        const clearBtn = document.querySelector('.title .clearall')
        clearBtn && clearBtn.addEventListener('click', (e) => {
            e.preventDefault()
            this.clearAll()
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new LedgerApp()
})
