/**
 * 列表查询
 */
export interface ITableQuery {
  /** 当前页数 */
  page: number;
  /** 每页条数 */
  limit: number;
  /** 搜索字段 模糊匹配 */
  search?: string;
  /** 搜索字段 精准匹配 */
  keywords?: Record<string, string[]>;
}
