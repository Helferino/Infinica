interface Publisher {
  favicon_url: string
  homepage_url: string
  logo_url: string
  name: string
}

interface Results {
  id: string
  article_url: string
  author: string
  title: string
  description: string
  image_url: string
  keywords: string[]
  publisher_utc: string
  publisher: Publisher
  tickers: string[]
}

export class Response {
  declare count: number
  declare next_url?: string
  declare request_id: string
  declare results: Results[]
  declare status: string

  public get newsLength() {
    let len = 0
    this.results.forEach(item => (len += item.title.length))
    return len
  }
}