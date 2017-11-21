<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 资讯管理
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="activeTab"  @tab-click="newsList")
                    el-tab-pane(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的资讯名称或内容" suffix-icon="el-icon-search" v-model="News.t.search" @change="newsList")
                el-table.mt10(:data="News.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="title", label="标题")
                    el-table-column(property="content" label="内容")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button(suffix-icon='el-icon-delete' @click="handleDestroy(scope.row)") 删除
                            el-button(suffix-icon='el-icon-delete' @click="handleUpdate") 编辑
                el-pagination.mt5(@current-change="News.list" :page-size="News.t.pageSize" layout="prev, pager, next, jumper" :total="News.t.PageCount" :current-page.sync="News.t.pageIndex")
                el-dialog(title="资讯管理" :visible.sync="dialog.news")
                    el-form(ref="NewsForm" :model="News.m" :rules="News.rules" label-width="120px" label-position="right")
                        el-form-item(label="资讯类别")
                            el-select(v-model="News.m.type")
                                el-option(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                        el-form-item(label="标题")
                            el-input(type="textarea" autosize v-model="News.m.title" auto-complete="off" placeholder="请填写标题")
                        el-form-item(label="内容")
                            el-input(type="textarea" autosize v-model="News.m.content" auto-complete="off" placeholder="请填写内容")
                    el-button(@click="dialog.news = false") 取消
                    el-button(type="primary" @click="handleNews") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { News } from "apis";

@Component
export default class NewsView extends Vue {
    @Provide() activeTab: number = 0;
    @Provide() News: any = News;
    @Provide() dialog = { news: false };
    @Provide() action = "";
    $refs: {
        NewsForm: HTMLFormElement;
    };
    protected created(): void {
        this.newsList()
    }
    public get env() {
        return this.$store.state.home.env;
    }
    public get tabs() {
        return ["公司新闻", "咨询文章"].map((x: string) => {
            return {name: x, value: this.env.document[x]};
        });
    }
    newsList () {
        News.list({type: this.activeTab})
    }
    handleCreate() {
        this.dialog.news = true;
        this.action = "create";
        News.m.reset();

    }
    handleUpdate() {
        this.dialog.news = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        News.destroy(data).then((r: any) => {
            News.list();
        });
    }
    handleNews() {
        if (this.action === "create") {
            News.create().then((r: any) => {
                this.dialog.news = false;
                this.newsList()
            });
        } else {
            News.update().then((r: any) => {
                this.dialog.news = false;
                this.newsList()
            });
        }
    }
    handleCurrentChange(data: any) {
        this.News.m.populate(data);
    }
}
</script>