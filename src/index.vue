<template>
  <div class="index">
    <h1>每天阅读的，值得分享的，便保留下来。</h1>
    <div class="main">
      <section class="cd-container">
        <div class="cd-timeline-block" v-for="key in keyAttr">
          <div class="cd-timeline-content">
            <span class="cd-date">{{key}}</span>
            <div v-for="data in readInfos[key]" class="cd-content">
              <a :href="data.url" target="_blank">{{data.title}}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        keyAttr:[],
        readInfos:{}
      }
    },
    mounted(){
      this.getDatas();
    },
    methods:{
      getDatas(){
        const self = this;
        var query = new AV.Query('ReadInfo');
        query.find().then(function(results) {
          var keys = {};
          var dates = [];
          var values = {};
          for (var i = results.length-1; i >= 0; i--) {
            var result = results[i]._serverData;
            var key = result.createTime;
            var value = keys[key];
            if (!value) {
              keys[key]=key;
              dates.push(key);
              values[key] = [];
              values[key].push(result);
            } else {
              values[key].push(result);
            }
          }
          var keyAttr = Object.keys(keys).sort(function(a, b) {
            return new Date(b) - new Date(a);
          });
          self.readInfos = values;
          self.keyAttr = keyAttr;
        })
      }
    }
  }
</script>

<style scoped>
  .index{
    width: 1000px;
    background: #fff;
    margin: 0 auto;
    padding: 20px;
  }
  h1{
    text-align: center;
  }
  a{
    color: #555;
    text-decoration: none;
    border-bottom: 1px solid #999;
    word-wrap: break-word;
    font-weight: bold;
  }
  a:hover{
    color: #333;
    border-bottom: 1px solid #333;
  }
  .cd-timeline-block{
    margin-bottom: 10px;
    font-size: 14px;
  }
  .cd-date{
    font-weight: bold;
    font-size: 16px;
  }
  .cd-content{
    margin-top: 10px;
    padding-left: 5px;
  }
</style>
