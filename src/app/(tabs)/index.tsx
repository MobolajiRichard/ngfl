import { IMAGES } from "@/assets/images";
import Container from "@/components/Container";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

// ─── Placeholder data ────────────────────────────────────────────────────────

type Player = { name: string; pts: number; captain?: boolean; vc?: boolean };

const TEAM: Record<string, Player[]> = {
  fwd: [
    { name: "D. Adetunji", pts: 12, captain: true },
    { name: "A. Nwabue", pts: 8 },
  ],
  mid: [
    { name: "A. Musybat", pts: 6 },
    { name: "K. Nwagu", pts: 7, vc: true },
    { name: "J. Okorie", pts: 5 },
    { name: "F. Ugwueze", pts: 9 },
  ],
  def: [
    { name: "A. Mbadike", pts: 6 },
    { name: "R. Nwagu", pts: 4 },
    { name: "J. Oseni", pts: 3 },
    { name: "T. Ugwueze", pts: 2 },
  ],
  gk: [{ name: "Y. Momuno", pts: 6 }],
};

const NEWS = [
  {
    id: "1",
    title: "NPFL Matchday 8: Top Performers",
    summary: "Find the best players from this weekend's action.",
    time: "2h ago",
  },
  {
    id: "2",
    title: "Rangers FC vs Enyimba: Match Preview",
    summary: "Key stats and predictions ahead of Sunday's clash.",
    time: "5h ago",
  },
];

const QUICK_ACTIONS = [
  { icon: "bar-chart-2", label: "Points" },
  { icon: "award", label: "Leagues" },
  { icon: "repeat", label: "Transfers" },
  { icon: "more-horizontal", label: "More" },
] as const;

// ─── Sub-components ──────────────────────────────────────────────────────────

function PlayerCard({ name, captain, vc }: Player) {
  return (
    <View className="items-center h-20" >
      <View className="relative items-center">
        <Image source={IMAGES.jersey} resizeMode="cover" className="w-14 h-14  " />
        {(captain || vc) && (
          <View className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-forest-900 items-center justify-center border border-white">
            <Text style={{ fontSize: 6 }} className="font-sans-bold text-white">
              {captain ? "C" : "V"}
            </Text>
          </View>
        )}
      <View
        className="bg-white rounded-[3px] px-1.5 py-0.5 items-center absolute top-[35px]"
        style={{ width: 60 }}
      >
        <Text
          className="text-[9px] font-sans text-center"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="text-forest-700 text-[8px] font-sans-bold">#4.0m</Text>
      </View>
      </View>
    </View>
  );
}

function BenchCard({ name, pts }: Player) {
  return (
    <View className="items-center" style={{ minWidth: 52 }}>
      <View className="w-9 h-9 rounded-full bg-white/10 border border-white/20 items-center justify-center">
        <Ionicons
          name="person-outline"
          size={16}
          color="rgba(255,255,255,0.5)"
        />
      </View>
      <Text
        className="text-white/70 text-[9px] font-sans mt-1 text-center"
        numberOfLines={1}
      >
        {name}
      </Text>
      <Text className="text-white/50 text-[9px] font-sans">{pts}pts</Text>
    </View>
  );
}

// ─── Screen ──────────────────────────────────────────────────────────────────

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  // Container has px-6 (24pt) on each side; pitch is 1536×1024 (3:2).
  // resizeMode="center" scales to fit container width → height = width × (1024/1536).
  // Setting the content wrapper to this exact height makes the image fill it perfectly.
  const pitchHeight = (width - 48) * (1024 / 1536);

  return (
    <Container edges={["top"]} scrollable>
      <View className="px-6">
        {/* ── Header ── */}
        <View className="flex-row items-center justify-between pb-4 border-b border-b-border">
          <View className="flex-row items-center gap-2">
            <Image
              className="w-12 h-12 "
              resizeMode="contain"
              source={IMAGES.logo}
            />
            <View>
              <Text className="font-sans-bold text-[23px] text-forest-900">
                NPFL
              </Text>
              <Text
                style={{ letterSpacing: 2 }}
                className="text-[10px] text-forest-800 font-sans-medium tracking-widest"
              >
                FANTASY
              </Text>
            </View>
          </View>
          <View className="w-12 h-12 rounded-[6px] border border-border items-center justify-center">
            <SimpleLineIcons name="bell" size={20} color="black" />
          </View>
        </View>

        {/* ── Gameweek row ── */}
        <View className="flex-row justify-between items-center  pt-4">
          <View>
            <Text className="font-sans-semibold text-[18px] text-forest-900 ">
              Gameweek 9
            </Text>
            <Text className="text-[12px] font-sans font-sans-regular mt-1">
              Deadline:{" "}
              <Text className="text-forest-800 font-sans-medium">
                Sat 29th May 2025, 16:00
              </Text>
            </Text>
          </View>
          <View className="border border-border rounded-[6px] p-2 py-3 flex-row items-center gap-2">
            <Feather name="calendar" size={18} color="#014421" />
            <Text className="font-sans-medium text-forest-900">
              View Fixtures
            </Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </View>
        </View>

        {/* ── Welcome banner ── */}
        <View className="p-4 rounded-[10px] bg-[#021E12] mt-4 flex-row">
          <View className="w-[60%]">
            <Text className="text-white font-sans text-[14px] mb-1">
              Welcome back,
            </Text>
            <Text className="text-white text-[30px] font-sans-semibold mb-3">
              Mobolaji 🇳🇬
            </Text>
            <Text className="text-white font-sans text-[14px]">
              The league awaits. Build smart, score big and top the charts
            </Text>
          </View>
          {/* Right: logo ball */}
          <View className="flex-1 items-center justify-center">
            <Image
              source={IMAGES.logo}
              resizeMode="contain"
              style={{ width: 90, height: 90, opacity: 0.9 }}
            />
          </View>
        </View>

        <View className="mt-5  border border-border rounded-[10px] ">
          <View className=" p-6 flex-row items-center justify-between mb-3 border-b border-border pb-3">
            <View>
              <Text className="font-sans-semibold text-[18px] mb-1 text-forest-900">
                My Team
              </Text>
              <Text className="font-sans text-[11px] text-text-secondary">
                Formation:{" "}
                <Text className="font-sans-medium text-primary">4-4-2</Text>
                {"  "}|{"  "}Bank:{" "}
                <Text className="font-sans-medium text-primary">₦2.5m</Text>
              </Text>
            </View>
            <Pressable className="flex-row items-center gap-2 border border-border rounded-[6px] px-3 py-3">
              <Text className="font-sans-medium text-[12px] text-forest-800">
                Edit Team
              </Text>
              <Ionicons name="shirt" size={13} color="#014421" />
            </Pressable>
          </View>

            <ImageBackground
              source={IMAGES.pitch}
              resizeMode="cover"
              className="w-full h-[400px]"
            >
            <View style={{ justifyContent: "space-around" }}>
              {/* GK */}
              <View className="flex-row justify-center">
                {TEAM.gk.map((p) => (
                  <PlayerCard key={p.name} {...p} />
                ))}
              </View>

              {/* DEF */}
              <View className="flex-row justify-around px-2">
                {TEAM.def.map((p) => (
                  <PlayerCard key={p.name} {...p} />
                ))}
              </View>

              {/* MID */}
              <View className="flex-row justify-around px-2">
                {TEAM.mid.map((p) => (
                  <PlayerCard key={p.name} {...p} />
                ))}
              </View>

              {/* FWD */}
              <View className="flex-row justify-center gap-5">
                {TEAM.fwd.map((p) => (
                  <PlayerCard key={p.name} {...p} />
                ))}
              </View>
            </View>
            </ImageBackground>
        </View>
      </View>

      {/* ── My Team section ── */}

      {/* ── Quick actions ── */}
      <View className="flex-row justify-around px-6 py-4 mt-4 border-t border-b border-border">
        {QUICK_ACTIONS.map(({ icon, label }) => (
          <Pressable key={label} className="items-center gap-1.5">
            <Feather name={icon} size={22} color="#014421" />
            <Text className="font-sans text-[11px] text-text-secondary">
              {label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* ── Latest News ── */}
      <View className="px-6 mt-5 mb-8">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="font-sans-semibold text-[18px] text-forest-900">
            Latest News
          </Text>
          <Pressable className="flex-row items-center gap-0.5">
            <Text className="font-sans-medium text-[13px] text-primary">
              View all
            </Text>
            <Ionicons name="chevron-forward" size={14} color="#008037" />
          </Pressable>
        </View>

        <View className="gap-3">
          {NEWS.map((item) => (
            <Pressable
              key={item.id}
              className="flex-row gap-3 bg-card rounded-[10px] p-3 border border-border"
            >
              {/* Thumbnail placeholder */}
              <View
                className="w-16 h-16 rounded-[8px] items-center justify-center"
                style={{ backgroundColor: "#014421" }}
              >
                <Feather
                  name="book-open"
                  size={22}
                  color="rgba(255,255,255,0.7)"
                />
              </View>
              <View className="flex-1 justify-center gap-1">
                <Text
                  className="font-sans-semibold text-[13px] text-forest-900"
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                <Text
                  className="font-sans text-[11px] text-text-secondary"
                  numberOfLines={1}
                >
                  {item.summary}
                </Text>
                <Text className="font-sans text-[10px] text-text-muted">
                  {item.time}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </Container>
  );
}
