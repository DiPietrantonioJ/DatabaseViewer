import { SiPostgresql, SiMysql, SiOracle, SiSqlite, SiMongodb, SiMariadb, SiSupabase, SiMicrosoftsqlserver } from "@icons-pack/react-simple-icons";
import { RiBarChartFill, RiTableFill } from "react-icons/ri";
import Button from "../../common/buttons";

function DatabaseButton(props: { label: string, databaseType: string, setSelectedMenu: any, setDatabase: any, database: any }) {

    function setData(button:string) {
        props.setSelectedMenu(button);
        props.setDatabase(props.database);
    }

    return (
        <div className="w-full rounded-lg bg-neutral-900 duration-300 flex flex-row justify-between items-center py-1 px-2 border-2 border-neutral-800">
            <div className="flex flex-row justify-center items-center gap-2">
                <ButtonIcon databaseType={props.databaseType} size={20} />
                <p>{props.label}</p>
            </div>
            <div className="flex flex-row justify-center items-center">
                <Button
                    className="hover:bg-black pl-1 pr-1 border-2 border-r !py-1 border-neutral-800 rounded-l-lg rounded-r-none duration-300"
                    onClick={setData}
                    argument={"table"}
                    disabled={false} >
                    <RiTableFill size={16} />
                </Button>
                <Button
                    className="hover:bg-black pl-1 pr-1 border-2 border-l !py-1 border-neutral-800 rounded-r-lg rounded-l-none duration-300"
                    onClick={setData}
                    argument={"graphs"}
                    disabled={false} >
                    <RiBarChartFill size={16} />
                </Button>
            </div>
        </div>
    )
}

export function ButtonIcon(props: { databaseType: string, size: number }) {
    return (
        <div className="p-1 border-2 rounded-full border-neutral-700 bg-black">
            {props.databaseType == "mysql" && <SiMysql size={props.size} color="#3E6E93" />}
            {props.databaseType == "mongodb" && <SiMongodb size={props.size} color="#00684A" />}
            {props.databaseType == "postgres" && <SiPostgresql size={props.size} color="#336791" />}
            {props.databaseType == "sqlserver" && <SiMicrosoftsqlserver size={props.size} color="#F34F1C" />}
            {props.databaseType == "sqlite" && <SiSqlite size={props.size} color="#044a64" />}
            {props.databaseType == "maria" && <SiMariadb size={props.size} color="#4e629a" />}
            {props.databaseType == "supabase" && <SiSupabase size={props.size} color="#3fcf8e" />}
            {props.databaseType == "oracle" && <SiOracle size={props.size} color="#c74634" />}
        </div>
    )
}

export default DatabaseButton
