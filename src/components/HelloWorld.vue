<template>
  <div class="hello">
    <el-table :data="tableData" style="width: 100%" border @cell-click="cellClick" @cell-mouse-enter="cellMouseEnter">
      <el-table-column width="150" prop="doc">
        <template slot-scope="scope">
          <th class="textc indexth">
            {{scope.row.doc}}
          </th>
        </template>
      </el-table-column>
      <el-table-column prop="mon" label="星期一">
        <template slot-scope="scope">
          <div class="textc innerdiv" :class="{bg_ccc: scope.row.mon}">
            <i class="el-icon-check" v-if="scope.row.mon"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="tue" label="星期二">
        <template slot-scope="scope">
          <div class="textc innerdiv" :class="{bg_ccc: scope.row.tue}">
            <i class="el-icon-check" v-if="scope.row.tue"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="wed" label="星期三">
        <template slot-scope="scope">
          <div class="textc innerdiv" :class="{bg_ccc: scope.row.wed}">
            <i class="el-icon-check" v-if="scope.row.wed"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="tur" label="星期四">
        <template slot-scope="scope">
          <div class="textc innerdiv" :class="{bg_ccc: scope.row.tur}">
            <i class="el-icon-check" v-if="scope.row.tur"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="fri" label="星期五">
        <template slot-scope="scope">
          <div class="textc innerdiv" :class="{bg_ccc: scope.row.fri}">
            <i class="el-icon-check" v-if="scope.row.fri"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sat" label="星期六">
        <template slot-scope="scope">
          <div class="textc innerdiv" :class="{bg_ccc: scope.row.sat}">
            <i class="el-icon-check" v-if="scope.row.sat"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sun" label="星期日">
        <template slot-scope="scope">
          <div class="textc innerdiv" :class="{bg_ccc: scope.row.sun}">
            <i class="el-icon-check" v-if="scope.row.sun"></i>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="rightbox">
      <div @click="selected">
        勾选排班
      </div>
      <div @click="noSelected">
        取消勾选
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        tableData: [{
            doc: '李医生',
            mon: false,
            tue: false,
            wed: false,
            tur: false,
            fri: false,
            sat: false,
            sun: false
          },
          {
            doc: '王医生',
            mon: false,
            tue: false,
            wed: false,
            tur: false,
            fri: false,
            sat: false,
            sun: false
          },
          {
            doc: '刘医生',
            mon: false,
            tue: false,
            wed: false,
            tur: false,
            fri: false,
            sat: false,
            sun: false
          },
          {
            doc: '张医生',
            mon: false,
            tue: false,
            wed: false,
            tur: false,
            fri: false,
            sat: false,
            sun: false
          },
          {
            doc: '黄医生',
            mon: false,
            tue: false,
            wed: false,
            tur: false,
            fri: false,
            sat: false,
            sun: false
          },
        ],
        isMouseDown: false,
        isCtrlKey: false
      }
    },
    created() {
      // 注册鼠标按下事件, 设置flag为true, 当鼠标弹起, 继续
      this.$nextTick(()=>{
        $('.el-table').mousedown((e)=>{
          $('.rightbox').hide()
          console.log(e);
          this.isMouseDown = true
          // 移除所有redborder
          // 如果此时按住了ctrl 获取点击右键
          if(!this.isCtrlKey && e.button!==2){
            $('.innerdiv').removeClass('redborder')
          }
          if(e.button===2){
            e.preventDefault();
            $('.rightbox').css({'left':e.clientX,'top':e.clientY}).show()
          }
        })
        document.oncontextmenu=new Function("return false");
        $(document).mouseup( (e)=> {
          e.preventDefault();
            this.isMouseDown = false;
            window.getSelection().removeAllRanges()
        });
        // 监听ctrl按键按下
        $(document).keydown((e)=>{
          if(e.keyCode===17){
            this.isCtrlKey = true
          }
        })
        $(document).keyup((e)=>{
          if(e.keyCode===17){
            this.isCtrlKey = false
          }
        })
      })
    },
    methods: {
      // 取消勾选
      noSelected(){
        $('.rightbox').hide()
      },
      // 勾选
      selected(){
        $('.rightbox').hide()
      },
      cellClick(row, column, cell, event){
        // 修改数据
        if(column.property==='doc'){
          return
        }
        // 移除所有redborder
        $('.innerdiv').removeClass('redborder')
        this.tableData.forEach(item=>{
          if(item===row){
            item[column.property]=!item[column.property]
          }
        })
      },
      cellMouseEnter(row, column, cell, event){
        console.log('鼠标移动到某个单元格');
        if(this.isMouseDown){
          // 鼠标按下移动
          $(cell).find('.innerdiv').addClass('redborder')
        }
      }
    },
  }
</script>
<style lang="scss">
.rightbox {
  display: none;
      position: fixed;
      
    width: 100px;
  border: 1px solid #999;
  top: 0;
  left: 0;
  div:first-child {
    border-bottom: 1px solid #ccc;
  }
  div {
    line-height: 30px;
    text-align: center;
    cursor: default;
  }
}
td {
  cursor: pointer;
}
.indexth {
  width: 150px;
  border: none!important;
  text-align: center!important;
}
.redborder {
  border: 3px solid red;
}
.bg_ccc {
  background-color: #ccc;
}
.textc {
  text-align: center;
}
td {
  padding: 0!important;
}
.el-table .cell {
  padding: 0!important;
}
.innerdiv {
  height: 50px;
  line-height: 50px;
}
.cannotselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.el-table tbody tr:hover>td { 
    background-color:#ffffff!important
}
</style>