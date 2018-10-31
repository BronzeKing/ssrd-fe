import { Component, Provide, Vue } from "vue-property-decorator";
import { Product, Category } from "src/apis";
/**
 * 后台管理--产品管理页面
 *
 * @export
 * @class Recruit
 * @extends {Vue}
 */
@Component
export default class ProductView extends Vue {
    @Provide() dialog = false;
    @Provide() loading = false;
    @Provide() action = "";
    @Provide() Product = Product;
    @Provide() Category = Category;
    $refs: {
        form: HTMLFormElement;
    };

    protected created(): void {
        Category.list({ action: "low" });
        this.productList();
    }
    productList() {
        Product.list();
    }
    handleCurrentChange(data: any) {
        this.Product.m.populate(data);
    }
    handleCreate() {
        this.dialog = true;
        this.action = "create";
        Product.m.reset();
    }
    handleUpdate() {
        this.dialog = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        Product.destroy(data).then((r: any) => {
            Product.list();
        });
    }
    /**
     * 处理新建或者编辑招聘信息
     *
     * @param {any} action create: 新建招聘信息
     * @memberof Recruit
     */
    handleProduct() {
        if (this.action === "create") {
            Product.create().then((r: any) => {
                this.dialog = false;
                Product.list();
            });
        } else {
            Product.update().then((r: any) => {
                this.dialog = false;
                Product.list();
            });
        }
    }
}
