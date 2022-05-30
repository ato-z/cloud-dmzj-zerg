declare namespace DMZJ {
    export interface BookListParams {
        type: number // 题材
        masses: number // 群体
        statu: number // 状态,
        region: number // 地区
        order: number // 0人气倒序  1更新倒序
        page: number
    }

    export interface BookListItem {
        app_click_count: number
        authors: string
        comic_py: string
        copyright: number
        cover: string
        first_letter: string
        hidden: number
        hot_hits: number
        id: number
        last_update_chapter_id: number
        last_update_chapter_name: string
        last_updatetime: number
        name: string
        num: string
        readergroup: string
        status: "连载中"|"已完成"
        types: string
        zone: "日本"|"内地"|"欧美"|"港台"|"韩国"|"其他"
    }
}