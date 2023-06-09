


export const pagination = (model) => (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const start = (page-1) * limit;
    const end = page * limit;

    const results = {}
        if(end < model.length){
        results.next={
            page: page + 1,
            limit: limit
        }
    }

    if(start > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    results.results = model.slice(start, end);
}
