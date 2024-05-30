export const enum DeviceType {
  Desktop = "desktop",
  Mobile = "mobile",
  Console = "console",
  Tablet = "tablet",
  Unknown = "unknown"
}

export const Device = {
  GetPlatformType: () => DeviceType.Desktop,
}
