// PROTOTYPE

fileprivate struct A: View {
    private typealias Tag = String
    private typealias Hash = String

    @State private var tags: [Tag: Hash] = [
        "alphabet":"d8ab0a1",
        "github-explorer":"04fe2df",
        "reverse-polish-notation":"2381375",
        "KVO":"c07da16",
        "text2numbers":"0d7728f",
        "bubble-sort":"a2166db",
        "selection-sort":"4ae4244",
        "quick-sort":"a4f2f16",
        "binary-search":"ec81b7",
        "delegate":"ccd4841",
        "euclidian-algorithm":"ea7065c",
        "shade-explorer":"7987475",
        "quiz":"5787760",
        "тестовое-задание-0":"c217cc5",
        "тестовое-задание-1":"a480f16",
        "utility-thu-6-jul-2023":"",
    ]

    @State private var tag: String = ""
    @State private var hash: String = ""
    @State private var isAdding: Bool = true
    @State private var isSharing: Bool = false
    @State private var copied: Tag = ""

    fileprivate var body: some View {
        NavigationStack {
            List {
                Section("Tags") {
                    ForEach(tags.keys.sorted(), id: \.self) { key in
                        HStack {
                            Text(key)
                                                    Spacer()
                                                    Text(tags[key]!)
                        }
                    }
                }
                Section("") {
                    Button {
                        isAdding.toggle()
                    } label: {
                        Label("Add", systemImage: "plus")
                    }
                }
            }
            .navigationTitle("A")
            .toolbar {
                Button {
                    isSharing.toggle()
                } label: {
                    Label("Share", systemImage: "square.and.arrow.up")
                }
            }
            .sheet(isPresented: $isAdding) {
                Form {
                    TextField("tag", text: $tag)
                    TextField("hash", text: $hash)
                }
                .onSubmit {
                    isAdding.toggle()
                    tags[tag] = hash
                    tag = ""
                    hash = ""
                }
            }
            .fullScreenCover(isPresented: $isSharing) {
                ScrollView {
                ForEach(tags.keys.sorted(), id: \.self) { key in
                    let a = """
git tag -a \(key) \(tags[key]!)
git push origin \(key)
"""
                        ZStack {
                            copied == key ? Color.green : Color.yellow
                            Text(a)
                        }
                        .scaledToFill()
                        .onTapGesture {
                            UIPasteboard.general.string = a
                            copied = key
                        }
                    }
                }
                .textSelection(.enabled)
            }
        }
    }
}
