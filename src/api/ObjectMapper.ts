export type ObjectMapper<TDomain, TApi> = ProtoMapper<TDomain, TApi> & DomainMapper<TDomain, TApi>

export type ProtoMapper<TDomain, TApi> = {
  toApi: (domainObject: TDomain) => TApi
}

export type DomainMapper<TDomain, TApi> = {
  toDomain: (apiObject: TApi) => TDomain
}
